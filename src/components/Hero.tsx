import '../app/styles/hero.scss'
import 'animate.css';

const Hero = () => {
  return (
    <section id="home">
      <div className='container home-container'>
        <div className='hello'>
          <p className='animate__animated animate__fadeInDown'>Hello, I&apos;m</p>
          <h1 className='animate__animated animate__fadeIn'>Giorgia Mineo</h1>
          <h2 className='animate__animated animate__fadeIn'>Software Engineer</h2>
          <p className='animate__animated animate__fadeInUp'>I build things for the web</p>
        </div>

        <div className='photo'></div>
      </div>
    </section>
  )
}


export default Hero