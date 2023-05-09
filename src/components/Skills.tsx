import '../app/styles/skills.scss'
import Image from 'next/image'

const Skills = () => {
  return (
    <section id="skills">
      <div className='container skills-container'>

        <h2>Tech skills</h2>
        {/* <p>HTML | CSS | SASS | Styled Components | Bootstrap | JavaScript | TypeScript | React | Next.js APIs | Node.js | Express | MongoDB | Mongoose | Python | Django | PostgreSQL Heroku | Netlify | Git | GitHub | NPM | Pipenv | TablePlus | Insomnia | bcrypt | JWT</p> */}

        <div className="icons">

          <div><Image alt='API icon' width={50} height={50} src="/icons/apis.png" /><p>APIs</p></div>
          <div><Image alt='bcrypt icon' width={50} height={50} src="/icons/bcrypt.jpeg" /><p>bcrypt</p></div>
          <div><Image alt='Bootstrap icon' width={50} height={50} src="/icons/bootstrap.svg" /><p>Bootstrap</p></div>
          <div><Image alt='CSS icon' width={50} height={50} src="/icons/css3.svg" /><p>CSS</p></div>
          <div><Image alt='Django icon' width={50} height={50} src="/icons/django.svg" /><p>Django</p></div>
          <div><Image alt='Express icon' width={50} height={50} src="/icons/express.svg" /><p>Express</p></div>
          <div><Image alt='Git icon' width={50} height={50} src="/icons/git.svg" /><p>Git</p></div>
          <div><Image alt='Github icon' width={50} height={50} src="/icons/github.svg" /><p>Github</p></div>
          <div><Image alt='Heroku icon' width={35} height={50} src="/icons/heroku.png" /><p>Heroku</p></div>
          <div><Image alt='HTML5 icon' width={50} height={50} src="/icons/html5.svg" /><p>HTML5</p></div>
          <div><Image alt='Insomnia icon' width={50} height={50} src="/icons/insomnia.png" /><p>Insomnia</p></div>
          <div><Image alt='JavaScript icon' width={50} height={50} src="/icons/javascript.svg" /><p>JavaScript</p></div>
          <div><Image alt='JWT icon' width={50} height={50} src="/icons/jwt.svg" /><p>JWT</p></div>
          <div><Image alt='MongoDB icon' width={50} height={50} src="/icons/mongodb.svg" /><p>MongoDB</p></div>
          <div><Image alt='Mongoose icon' width={50} height={50} src="/icons/mongoose.jpg" /><p>Mongoose</p></div>
          <div><Image alt='Netlify icon' width={50} height={50} src="/icons/netlify.png" /><p>Netlify</p></div>
          <div><Image alt='Next icon' width={70} height={50} src="/icons/next.png" /><p>Next.js</p></div>
          <div><Image alt='Node icon' width={50} height={50} src="/icons/node.svg" /><p>Node</p></div>
          <div><Image alt='NPM icon' width={50} height={50} src="/icons/npm.svg" /><p>NPM</p></div>
          <div><Image alt='PostgreSQL icon' width={50} height={50} src="/icons/postgresql.svg" /><p>PostgreSQL</p></div>
          <div><Image alt='Python icon' width={50} height={50} src="/icons/python.png" /><p>Python</p></div>
          <div><Image alt='React icon' width={50} height={50} src="/icons/react.svg" /><p>React</p></div>
          <div><Image alt='Sass icon' width={50} height={50} src="/icons/sass.png" /><p>Sass</p></div>
          <div><Image alt='Styled Components icon' width={50} height={50} src="/icons/styled.png" /><p>Styled Components</p></div>
          <div><Image alt='TablePlus icon' width={50} height={50} src="/icons/tableplus.png" /><p>TablePlus</p></div>
          <div><Image alt='TypeScript icon' width={50} height={50} src="/icons/typescript.png" /><p>TypeScript</p></div>
        </div>

        <h2 className='languages-title'>Languages</h2>
        {/* <p>English | Arabic | Swedish | Japanese</p> */}
        <div className='languages'>
          <div className='en'><p>English</p></div>
          <div className='ar'><p>Arabic</p></div>
          <div className='sv'><p>Swedish</p></div>
          <div className='jp'><p>Japanese</p></div>
        </div>

      </div>
    </section>
  )
}


export default Skills