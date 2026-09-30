import { about, experience, projects, sections } from './data'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useSpotlight } from './hooks/useSpotlight'
import Sidebar from './components/Sidebar'
import ItemList from './components/ItemList'

const ids = sections.map((s) => s.id)

export default function App() {
  const active = useScrollSpy(ids)
  useSpotlight()
  return (
    <>
      <div id="spot" aria-hidden="true" />
      <div className="wrap">
        <Sidebar active={active} />
        <main>
          <section id="about">
            <div className="head">About</div>
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </section>
          <section id="experience">
            <div className="head">Experience</div>
            <ItemList items={experience} />
          </section>
          <section id="projects">
            <div className="head">Projects</div>
            <ItemList items={projects} />
          </section>
          <p className="foot">Layout inspired by Brittany Chiang's portfolio. All content here is placeholder.</p>
        </main>
      </div>
    </>
  )
}
