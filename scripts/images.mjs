// Progressive images, mipmap-style. For every heavy raster under public/media:
//   - WebP variants at 480, 960 and 1600 px wide (never upscaled) in public/media/_r/
//   - a ~24 px blurred placeholder, inlined as a data URI
// and a manifest the <SmartImg> component reads. Cached by file size + mtime, so reruns are instant.
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = 'public/media'
const OUT = 'public/media/_r'
const MANIFEST = 'src/lib/images.json'
const WIDTHS = [480, 960, 1600]
const MIN_BYTES = 30 * 1024

const old = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {}
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name)
  if (e.isDirectory()) return p.startsWith(OUT) ? [] : walk(p)
  return /\.(jpe?g|png|webp)$/i.test(e.name) ? [p] : []
})

fs.mkdirSync(OUT, { recursive: true })
const manifest = {}
let made = 0
for (const file of walk(ROOT)) {
  const st = fs.statSync(file)
  if (st.size < MIN_BYTES) continue
  const url = '/' + path.relative('public', file).split(path.sep).join('/')
  const key = `${st.size}:${Math.round(st.mtimeMs)}`
  if (old[url]?.key === key && old[url].variants.every((v) => fs.existsSync(path.join('public', v.src)))) { manifest[url] = old[url]; continue }

  const img = sharp(file, { failOn: 'none' })
  const { width, height } = await img.metadata()
  const base = path.join(OUT, path.relative(ROOT, file)).replace(/\.(jpe?g|png|webp)$/i, '')
  fs.mkdirSync(path.dirname(base), { recursive: true })
  const variants = []
  for (const w of WIDTHS.filter((w) => w < width).concat(width)) {
    const out = `${base}-${w}.webp`
    await sharp(file).resize({ width: w }).webp({ quality: 78, effort: 5 }).toFile(out)
    variants.push({ w, src: '/' + path.relative('public', out).split(path.sep).join('/') })
  }
  const tiny = await sharp(file).resize({ width: 24 }).blur(0.6).webp({ quality: 40 }).toBuffer()
  manifest[url] = { key, w: width, h: height, lqip: `data:image/webp;base64,${tiny.toString('base64')}`, variants }
  made++
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 0))
console.log(`images: ${Object.keys(manifest).length} progressive (${made} rebuilt)`)
