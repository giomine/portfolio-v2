import styles from './page.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Work /> */}
        <Hobbies />
        <Contact />
      </main>
    </>
  )
}
