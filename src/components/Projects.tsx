import LeftAlign from "./projects/leftAlign"
import RightAlign from "./projects/rightAlign"
import '../app/styles/projects.scss'

const Projects = () => {
  return (
    <section id="projects">
      <div className="container projects-container">
        <h2>Projects</h2>
        <LeftAlign 
          image="/assets/sweden.png"
          title="Discover Sweden"
          tech="React, JSX,  SASS, Cloudinary, React-mapbox-gl, Python, Django, PostrgreSQL, Psycopg2-binary, Pylint, Django REST framework, Pyjwt, Insomnia, TablePlus, Heroku, Trello, Excalidraw, QuickDBD"
          description="A full-stack, full-CRUD app using React on the frontend with Django and PostgreSQL on the backend. I wanted to create an app around the theme of exploration, so I created a platform where users can discover more about Sweden. I implemented Mapbox so that users can search both by browsing entries or by exploring the map directly, and Cloudinary so that users can upload photos of places they discover. I added 13 populated user accounts to create a lively atmosphere for the platform, encouraging visitors to get involved."
        />
        <RightAlign 
          image="/assets/insta.png"
          title="Instasham"
          tech="React, Node, Express, MongoDB, Mongoose, JSX, SASS, Insomnia, Excalidraw"
          description="A full-stack MERN Instagram clone with full CRUD functionality built in a group of three. I created many of the models and pages for this app, and focused on building up the interface mobile-first with Instagram-like features such as profile pictures and working comments sections. I also added Cloudinary so the user can upload photos, and added 11 populated user accounts, resulting in a faithful Instagram experience."
        />
        <LeftAlign
          image="/assets/dictionary.png"
          title="Merriam-Webster Dictionaries"
          tech="HTML, CSS, React, Merriam-Webster API, Insomnia, Sass, Excalidraw"
          description="A two-day hackathon using a public API with React. As linguists, we decided to create a dictionary app. I took responsibility for creating a mobile-first interface and for pulling a variety of information including images, sound and text from two separate APIs from Merriam-Webster."
        />
        <RightAlign 
          image="/assets/pacman.png"
          title="Chuchu-Pacman"
          tech="HTML, CSS, JavaScript, Excalidraw"
          description="A Pacman-style game built using only HTML, CSS and JavaScript. I created this tribute full of surprises for retro gaming fans: three themes (Pacman, Parappa the Rapper, and ChuChu Rocket), multiple different levels to beat, three difficulty modes, music and sfx, and the classic unlimited lives secret cheat code. I also wrote my own recursive pathfinding algorithm to make each ghost accurately chase the player in its own way."
        />
      </div>
    </section>
  )
}


export default Projects