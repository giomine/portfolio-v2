import '../app/styles/skills.scss'
import Image from 'next/image'

const Skills = () => {
  return (
    <section id="skills">
      <div>Tech skills</div>
      {/* <p>HTML | CSS | SASS | Styled Components | Bootstrap | JavaScript | TypeScript | React | Next.js APIs | Node.js | Express | MongoDB | Mongoose | Python | Django | PostgreSQL Heroku | Netlify | Git | GitHub | NPM | Pipenv | TablePlus | Insomnia | bcrypt | JWT</p> */}

      <div className="icons">

        <div><Image alt='API icon' width={30} height={30} src="/icons/apis.png" /><div>APIs</div></div>
        <div><Image alt='bcrypt icon' width={30} height={30} src="/icons/bcrypt.jpeg" /><div>bcrypt</div></div>
        <div><Image alt='Bootstrap icon' width={30} height={30} src="/icons/bootstrap.svg" /><div>Bootstrap</div></div>
        <div><Image alt='CSS icon' width={30} height={30} src="/icons/css3.svg" /><div>CSS</div></div>
        <div><Image alt='Django icon' width={30} height={30} src="/icons/django.svg" /><div>Django</div></div>
        <div><Image alt='Express icon' width={30} height={30} src="/icons/express.svg" /><div>Express</div></div>
        <div><Image alt='Git icon' width={30} height={30} src="/icons/git.svg" /><div>Git</div></div>
        <div><Image alt='Github icon' width={30} height={30} src="/icons/github.svg" /><div>Github</div></div>
        <div><Image alt='Heroku icon' width={45} height={30} src="/icons/heroku.png" /><div>Heroku</div></div>
        <div><Image alt='HTML5 icon' width={30} height={30} src="/icons/html5.svg" /><div>HTML5</div></div>
        <div><Image alt='Insomnia icon' width={30} height={30} src="/icons/insomnia.png" /><div>Insomnia</div></div>
        <div><Image alt='JavaScript icon' width={30} height={30} src="/icons/javascript.svg" /><div>JavaScript</div></div>
        <div><Image alt='JWT icon' width={30} height={30} src="/icons/jwt.svg" /><div>JWT</div></div>
        <div><Image alt='MongoDB icon' width={30} height={30} src="/icons/mongodb.svg" /><div>MongoDB</div></div>
        <div><Image alt='Mongoose icon' width={30} height={30} src="/icons/mongoose.jpg" /><div>Mongoose</div></div>
        <div><Image alt='Netlify icon' width={100} height={30} src="/icons/netlify.png" /><div>Netlify</div></div>
        <div><Image alt='Next icon' width={60} height={30} src="/icons/next.png" /><div>Next.js</div></div>
        <div><Image alt='Node icon' width={30} height={30} src="/icons/node.svg" /><div>Node</div></div>
        <div><Image alt='NPM icon' width={30} height={30} src="/icons/npm.svg" /><div>NPM</div></div>
        <div><Image alt='PostgreSQL icon' width={30} height={30} src="/icons/postgresql.svg" /><div>PostgreSQL</div></div>
        <div><Image alt='Python icon' width={30} height={30} src="/icons/python.png" /><div>Python</div></div>
        <div><Image alt='React icon' width={30} height={30} src="/icons/react.svg" /><div>React</div></div>
        <div><Image alt='Sass icon' width={30} height={30} src="/icons/sass.png" /><div>Sass</div></div>
        <div><Image alt='Styled Components icon' width={30} height={30} src="/icons/styled.png" /><div>Styled Components</div></div>
        <div><Image alt='TablePlus icon' width={30} height={30} src="/icons/tableplus.png" /><div>TablePlus</div></div>
        <div><Image alt='TypeScript icon' width={30} height={30} src="/icons/typescript.png" /><div>TypeScript</div></div>
      </div>

      <div>Languages</div>
      {/* <p>English | Arabic | Swedish | Japanese</p> */}
      <div className='languages'>
        <div className='en'><p>English</p></div>
        <div className='ar'><p>Arabic</p></div>
        <div className='sv'><p>Swedish</p></div>
        <div className='jp'><p>Japanese</p></div>
      </div>
    </section>
  )
}


export default Skills