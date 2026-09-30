import { Check } from 'react-feather'
import type { Service } from '../data'

export default function Services({ items }: { items: Service[] }) {
  return (
    <ul className="services">
      {items.map((s) => (
        <li key={s.title}>
          <Check size={18} aria-hidden="true" focusable="false" />
          <div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}