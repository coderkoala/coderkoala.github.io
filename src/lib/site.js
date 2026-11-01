export const site = {
  url: 'https://nobeldahal.com.np',
  name: 'Nobel Dahal',
  role: 'Full-stack developer and software engineer',
  place: 'Kathmandu, Nepal',
  email: 'nobel@dahal.tech',
  cv: '/download/resume.pdf',
  github: 'https://github.com/coderkoala',
  linkedin: 'https://www.linkedin.com/in/coderkoala',
  motto: 'Find a way, or make one.',
  // Set these and the site shows them; leave empty to hide.
  booking: '',          // e.g. a Cal.com link: 'https://cal.com/coderkoala/30min'
  availability: '',     // e.g. 'Taking one new engagement from January 2027'
}

export const experience = [
  { org: 'Independent', title: 'Software consultant', type: 'Own practice', when: '2020–now' },
  { org: 'Code for Nepal', title: 'Data science fellow', type: 'Part-time', when: '2021–22' },
  { org: 'United Real Estate', title: 'Software engineer', type: 'Contract', when: '2020–21' },
  { org: 'Proshore', title: 'Software engineer', type: 'Full-time', when: '2020–21' },
  { org: 'TechSathi', title: 'Platform architect', type: 'Part-time', when: '2020' },
  { org: 'ThemeGrill', title: 'WordPress plugin developer', type: 'Full-time', when: '2019–20' },
  { org: 'Gurkha Technology', title: 'Software engineer', type: 'Full-time', when: '2019' },
  { org: 'GDG Dang', title: 'Organizer and speaker', type: 'Volunteer', when: '2019' },
  { org: 'The Open Institute for Social Science', title: 'Software engineer', type: 'Internship', when: '2018–19' },
]

// featured: shown up front. The rest fold under "More courses".
export const certifications = [
  { name: 'Project Management Foundations', issuer: 'PMI', year: 2024, featured: true },
  { name: 'DevOps Professional Certificate', issuer: 'PagerDuty', year: 2024, featured: true },
  { name: 'Career Essentials in Software Development', issuer: 'Microsoft', year: 2024, featured: true },
  { name: 'Career Essentials in Project Management', issuer: 'Microsoft', year: 2024, featured: true },
  { name: 'Introduction to Generative AI', issuer: 'AWS', year: 2024, featured: true },
  { name: 'Intermediate PostgreSQL', issuer: 'University of Michigan', year: 2021, featured: true },
  { name: 'SQL Server Developer', issuer: 'DataCamp', year: 2022, featured: true },
  { name: 'SQL Server for Database Administrators', issuer: 'DataCamp', year: 2022 },
  { name: 'Database Design', issuer: 'DataCamp', year: 2022 },
  { name: 'Become a Data Analyst', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'Data Cleaning in Python', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'R: Wrangling and Visualizing Data', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'Project Management Foundations', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'Laravel 9 Essential Training', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'Vue.js 3 Essential Training', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'Apache Web Server: Administration', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'AWS Essential Training for Developers', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'Node.js: Testing and Code Quality', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'Node.js: Debugging and Performance Tuning', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'Node.js: Design Patterns', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'DevOps Foundations', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'DevOps Foundations: CI/CD', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'DevOps Foundations: Infrastructure as Code', issuer: 'LinkedIn Learning', year: 2024 },
  { name: 'cPanel Professional (expired 2025)', issuer: 'cPanel', year: 2024 },
  { name: 'Advanced Node.js: Scaling Applications', issuer: 'LinkedIn Learning', year: 2021 },
  { name: 'Node.js Essential Training', issuer: 'LinkedIn Learning', year: 2020 },
]

export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  givenName: 'Nobel',
  familyName: 'Dahal',
  url: site.url,
  image: `${site.url}/og/default.png`,
  jobTitle: 'Independent Software Consultant',
  hasOccupation: { '@type': 'Occupation', name: 'Full-stack web developer', occupationLocation: { '@type': 'Country', name: 'Nepal' }, skills: 'Laravel, PHP, Vue.js, Node.js, PostgreSQL, MySQL, WordPress, ERP, CRM' },
  description: 'Built Kaede, a cargo ERP for freight forwarders (IATA ONE Record, AWB stock, learning suggestions). Full-stack developer in Kathmandu, Nepal: Laravel, Vue, PostgreSQL.',
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressRegion: 'Bagmati', addressCountry: 'NP' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Himalaya College of Engineering' },
  sameAs: [site.github, site.linkedin],
  knowsLanguage: ['en', 'ne'],
  knowsAbout: ['Full-stack web development', 'Web application development', 'WordPress plugin development', 'Payment gateway integration (eSewa, Khalti)', 'Laravel', 'PHP', 'Vue.js', 'Node.js', 'PostgreSQL', 'ERP systems', 'CRM systems', 'Air cargo software', 'IATA Cargo-XML', 'Microsoft Dynamics 365', 'DevOps'],
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: 'en',
  author: { '@id': `${site.url}/#person` },
  // eslint-disable-next-line no-undef
  dateModified: typeof __BUILT_AT__ !== 'undefined' ? __BUILT_AT__ : undefined,
}

export function crumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c.name, item: site.url + c.path,
    })),
  }
}

// Short, verifiable, each with its link.
export const openSource = [
  { what: 'Laravel', text: 'Fixed a date overflow that crashed validation. Shipped in 8.x.', href: 'https://github.com/laravel/framework/pull/40690', ref: 'laravel/framework#40690' },
  { what: 'Syncfusion EJ2', text: 'Wrote the Nepali locale, now part of the library.', href: 'https://github.com/syncfusion/ej2-locale/pull/192', ref: 'ej2-locale#192' },
  { what: 'WPEverest', text: '28 merged pull requests to Everest Forms and User Registration.', href: 'https://github.com/themegrill/everest-forms/pulls?q=is%3Apr+author%3Acoderkoala+is%3Amerged', ref: 'themegrill' },
  { what: 'WPEverest docs', text: 'Wrote the developer documentation, on my own.', href: 'https://themegrill.github.io/dev-docs/', ref: 'dev-docs' },
  { what: 'GDG Dang', text: 'Built the DevFest 2019 site and a Vision AI demo for my talk.', href: 'https://github.com/gdgdang', ref: 'gdgdang' },
  { what: 'PHPJasper', text: 'Maintain a fork for production: JasperStarter 3.6.2, headless Java, Japanese fonts.', href: 'https://github.com/coderkoala/phpjasper', ref: 'coderkoala/phpjasper' },
  { what: 'vee-validate', text: 'Made the Nepali messages formal and correct.', href: 'https://github.com/logaretm/vee-validate/pull/4642', ref: 'vee-validate#4642' },
]

// Grouped for reading; `assessed` = passed a LinkedIn skill assessment.
export const skills = [
  { group: 'Backend', items: ['PHP', 'Laravel', 'Node.js', 'Express', 'Python', 'C++'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MariaDB', 'Power BI', 'Tableau'] },
  { group: 'Frontend', items: ['Vue.js', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Platform', items: ['Linux', 'Bash', 'Docker', 'AWS', 'CI/CD', 'Dynamics 365'] },
]
export const assessed = ['PHP', 'JavaScript', 'Node.js', 'C++', 'Bash', 'Linux', 'Git', 'HTML', 'CSS', 'WordPress', 'jQuery']
