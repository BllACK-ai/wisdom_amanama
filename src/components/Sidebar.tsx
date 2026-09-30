import { profile, sections, socials } from '../data'

export default function Sidebar({ active }: { active: string }) {
  return (
    <header>
      <div>
        <h1><a href="#">{profile.name}</a></h1>
        <h2 className="sub">{profile.role}</h2>
        <p className="tag">{profile.tagline}</p>
        <nav aria-label="Sections">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? 'on' : ''}><i />{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="social">
        {socials.map((s) => {
          const Icon = s.icon
          return (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} title={s.label}>
                <Icon size={20} aria-hidden="true" focusable="false" />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
