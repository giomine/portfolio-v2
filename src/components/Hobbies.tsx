import '../app/styles/hobbies.scss'

const Hobbies = () => {
  return (
    <section id="hobbies">
      <div className="container hobbies-container">
        <h2>Hobbies</h2>
        
        <div className='grid'>
          <div>
            <h3>Cycling</h3>
            <p>I love exploring nature and cityscapes, and I collect photos of beautiful scenery - especially in Lincolnshire!</p>
          </div>

          <div>
            <h3>Languages</h3>
            <p>I really enjoy decoding foreign languages and love how this opens me up to so much culture. Each country has its own special feel, and being able to immerse myself in different experiences is really special.</p>
          </div>

          <div>
            <h3>Gaming</h3>
            <p>Games are a passion for a similar reason as the above - they are an amazing way to have new experiences! As a player you get to explore so many imaginative worlds and stories along with beautiful artwork and music.</p>
          </div>
        </div>

      </div>
    </section>
  )
}


export default Hobbies