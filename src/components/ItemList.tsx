import type { Item } from '../data'

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="list">
      {items.map((it) => (
        <li className="item" key={it.title}>
          <div className="when">{it.when}</div>
          <div>
            <h3>{it.href ? <a href={it.href}>{it.title}</a> : it.title}</h3>
            <p>{it.body}</p>
            {it.tags && (
              <ul className="chips">
                {it.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
