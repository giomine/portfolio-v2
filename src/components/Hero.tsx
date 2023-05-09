import '../app/styles/hero.scss'

const Hero = () => {
  return (
    <section id="home">
      <div className='container home-container'>
        <div className='hello'>
          <p>Hello, I&apos;m</p>
          <h1>Giorgia Mineo</h1>
          <h2>Junior Software Engineer</h2>
          <p>I build things for the web</p>
        </div>

        <div className='photo'></div>
      </div>
    </section>
  )
}


export default Hero