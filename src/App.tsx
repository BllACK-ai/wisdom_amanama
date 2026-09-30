import { about, profile, projects, sections, services, teaching } from './data'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useSpotlight } from './hooks/useSpotlight'
import Sidebar from './components/Sidebar'
import ItemList from './components/ItemList'
import Services from './components/Services'

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
          <section id="projects">
            <div className="head">Projects</div>
            <ItemList items={projects} />
          </section>
          <section id="services">
            <div className="head">Services</div>
            <Services items={services} />
          </section>
          <section id="teaching">
            <div className="head">Teaching</div>
            <ItemList items={teaching} />
          </section>
          <p className="foot">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </main>
      </div>
    </>
  )
}