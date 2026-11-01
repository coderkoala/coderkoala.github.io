"""Writes public/download/resume.docx from the data `npm run cv` dumps.

Needs python-docx:  pip install python-docx
Run after `npm run cv`:  python3 scripts/cv_docx.py
"""
import json
from docx import Document
from docx.shared import Pt, RGBColor, Mm
from docx.enum.text import WD_TAB_ALIGNMENT

d = json.load(open('scripts/.cv-data.json'))
s = d['site']
doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Mm(210), Mm(297)
for side in ('left_margin', 'right_margin', 'top_margin', 'bottom_margin'):
    setattr(sec, side, Mm(15))
base = doc.styles['Normal']
base.font.name, base.font.size = 'Calibri', Pt(10)
GREY = RGBColor(0x75, 0x74, 0x6f)


def para(text='', bold=False, size=None, color=None, space=2):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space)
    if text:
        r = p.add_run(text)
        r.bold, r.font.color.rgb = bold, color
        if size: r.font.size = Pt(size)
    return p


def heading(text):
    p = para(text.upper(), bold=True, size=8.5, color=GREY, space=4)
    p.paragraph_format.space_before = Pt(10)


def entry(name, sub, when):
    p = para(space=1)
    p.paragraph_format.tab_stops.add_tab_stop(Mm(180), WD_TAB_ALIGNMENT.RIGHT)
    p.add_run(name).bold = True
    r = p.add_run(f'  ·  {sub}'); r.font.color.rgb = GREY
    r = p.add_run(f'\t{when}'); r.font.color.rgb = GREY


def bullets(items):
    for t in items:
        p = doc.add_paragraph(t, style='List Bullet')
        p.paragraph_format.space_after = Pt(1)


para(s['name'], bold=True, size=22, space=0)
para('Independent Software Consultant · Full-Stack Developer', size=11, color=GREY, space=2)
para(f"Kathmandu, Nepal (UTC+5:45) · {s['email']} · nobeldahal.com.np · github.com/coderkoala · linkedin.com/in/coderkoala", size=9, color=GREY, space=8)
para("Built Kaede, a cargo ERP for freight forwarders, end to end: IATA ONE Record and Cargo-XML, AWB stock under concurrency, carrier-portal automation, and a learning engine that suggests from the office's own history. Laravel contributor; author of Syncfusion's Nepali locale. Full-stack developer in Kathmandu, shipping production software since 2018.", space=4)

heading('Selected work')
for p in d['projects']:
    entry(p['name'], f"{p['kind']} · {p['role']}", p['when'])
    bullets(p['points'])
    para(p['stack'], size=8.5, color=GREY, space=6)

heading('Experience')
for r in d['roles']:
    entry(r['org'], r['title'], r['when'])
    bullets(r['points'])

heading('Open source')
bullets([f"{o['what']}: {o['text']}" for o in d['openSource']])

heading('Skills')
for g in d['skills']:
    p = para(space=1); p.add_run(f"{g['group']}: ").bold = True; p.add_run(', '.join(g['items']))

heading('Certifications')
bullets([f"{c['name']} · {c['issuer']}, {c['year']}" for c in d['certifications']])
para(f"And {d['restCount']} more, including Vue.js 3, Laravel 9, Node.js and AWS (LinkedIn Learning).", size=9, color=GREY)

heading('Education')
para('Bachelor of Engineering, Computer · Himalaya College of Engineering, Kathmandu · 2014–2018')
heading('Languages')
para('English (professional), Nepali (native)')

doc.core_properties.author = s['name']
doc.core_properties.title = 'Nobel Dahal · Résumé'
doc.save('public/download/resume.docx')
print('cv: public/download/resume.docx')
