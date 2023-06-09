import '../app/styles/hobbies.scss'

const Hobbies = () => {
  return (
    <section id="hobbies">
      <div className="container hobbies-container">
        <h2>Hobbies</h2>
        
        <div className='grid'>
          <div className='grid-div'>
            <div className='hobby-logo cycle'></div>
            <h3>Cycling</h3>
            <p>I love exploring nature and cityscapes, and I collect photos of beautiful scenery - especially countryside views and architecture. There is always something new to see!</p>
          </div>

          <div className='grid-div'>
            <div className='hobby-logo langs'></div>
            <h3>Languages</h3>
            <p>I really enjoy decoding foreign languages and love how this opens me up to so much culture. Each country has its own special feel, and being able to immerse myself in different experiences is really special.</p>
          </div>

          <div className='grid-div'>
            <div className='hobby-logo gaming'></div>
            <h3>Gaming</h3>
            <p>Games are my passion for the same reasons - exploration and new experiences. As a player you get to explore so many imaginative worlds and stories along with beautiful artwork and music.</p>
          </div>
        </div>

      </div>
    </section>
  )
}


export default Hobbies