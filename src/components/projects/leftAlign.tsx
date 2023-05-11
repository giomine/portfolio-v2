import { NextPage } from "next"
import Link from "next/link"

interface Props {
  image: string
  title: string
  tech: string
  description: string
  codelink: string
  sitelink: string
}

const LeftAlign: NextPage<Props> = (props) => {
  const { title, image, tech, description, codelink, sitelink } = props
  return (
    <div className="container left-container">
        <div className="photo-buttons">
          <Link className="photo" style={{ backgroundImage: `url('${image}')` }} target="_blank" href={sitelink}></Link>
          <div className="buttons">
            <Link target="_blank" href={codelink}><button><div className="logo"></div>ReadMe</button></Link>
            <Link target="_blank" href={sitelink}><button><div className="logo leave"></div>Site</button></Link>
          </div>
        </div>

      <div className="text">
        <h3>{title}</h3>
        <p className="tech">{tech}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}


export default LeftAlign