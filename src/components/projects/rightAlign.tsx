import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"

interface Props {
  image: string
  title: string
  tech: string
  description: string
  codelink: string
  sitelink: string
}

const RightAlign: NextPage<Props> = (props) => {
  const { image, title, tech, description, codelink, sitelink } = props
  return (
    <div className="container right-container">
      <div className="text">
        <h3>{title}</h3>
        <p className="tech">{tech}</p>
        <p>{description}</p>
      </div>

      <div className="photo-buttons">
        <Link className="photos" target="_blank" href={sitelink}><Image alt="project" src={image} width={600} height={320}></Image></Link>
        <div className="buttons">
          <Link target="_blank" href={codelink}><button><div className="logo"></div>ReadMe</button></Link>
          <Link target="_blank" href={sitelink}><button><div className="logo leave"></div>Site</button></Link>
        </div>
      </div>

    </div>
  )
}


export default RightAlign
