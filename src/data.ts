import { GitHub, Linkedin, Mail, type Icon } from 'react-feather'

export type Item = { when: string; title: string; href?: string; body: string; tags?: string[] }
export type Social = { label: string; href: string; icon: Icon }

export const profile = {
  name: 'Your Name',
  role: 'Software Engineer',
  tagline: 'I build fast, reliable systems and the interfaces people use to reach them.',
  socials: [
    { label: 'GitHub', href: '#', icon: GitHub },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Email', href: '#', icon: Mail },
  ] satisfies Social[],
}

export const about = [
  'Write two or three short paragraphs here: what you build, what you care about, and what you are looking for next.',
  'Mention a specific project or result that shows how you work, then close with what you do away from the keyboard.',
]

export const experience: Item[] = [
  { when: '2024 – Present', title: 'Senior Engineer · Company A', body: 'Describe what you owned and the outcome it produced, in one or two sentences.', tags: ['Rust', 'PostgreSQL', 'Docker'] },
  { when: '2022 – 2024', title: 'Software Developer · Company B', body: 'Describe what you owned and the outcome it produced, in one or two sentences.', tags: ['TypeScript', 'React', 'Node'] },
  { when: '2020 – 2022', title: 'Developer · Company C', body: 'Describe what you owned and the outcome it produced, in one or two sentences.', tags: ['Python', 'SQLite'] },
]

export const projects: Item[] = [
  { when: 'Rust', title: 'Project one', href: '#', body: 'One sentence on what it does and who it is for.' },
  { when: 'TypeScript', title: 'Project two', href: '#', body: 'One sentence on what it does and who it is for.' },
  { when: 'Python', title: 'Project three', href: '#', body: 'One sentence on what it does and who it is for.' },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]
