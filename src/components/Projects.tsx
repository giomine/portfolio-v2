import LeftAlign from "./projects/leftAlign"
import RightAlign from "./projects/rightAlign"

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div>Projects</div>
        <LeftAlign />
        <RightAlign />
        <LeftAlign />
        <RightAlign />
      </div>
    </section>
  )
}


export default Projects