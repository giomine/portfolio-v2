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

const RightAlign: NextPage<Props> = (props) => {
  const { image, title, tech, description, codelink, sitelink } = props
  return (
    <div className="container right-container">
      <div className="text">
        <h3>{title}</h3>
        <p>{tech}</p>
        <p>{description}</p>
      </div>

      <Link target="_blank" href={sitelink}>
        <div className="photo-buttons">
          <div className="photo" style={{ backgroundImage: `url('${image}')` }}></div>
          <div className="buttons">
            <Link target="_blank" href={codelink}><button><div className="logo"></div>Code</button></Link>
            <Link target="_blank" href={sitelink}><button><div className="logo leave"></div>Site</button></Link>
          </div>
        </div>
      </Link>

    </div>
  )
}


export default RightAlign
