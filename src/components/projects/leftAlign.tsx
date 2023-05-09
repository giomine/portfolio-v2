import { NextPage } from "next"
import Image from "next/image"

interface Props {
  image: string
  title: string
  tech: string
  description: string
}

const LeftAlign: NextPage<Props> = (props) => {
  const { title, image, tech, description } = props
  return (
    <div className="container left-container">
      <div className="photo" style={{ backgroundImage: `url('${image}')` }}></div>
      <div className="text">
        <h3>{title}</h3>
        <p>{tech}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}


export default LeftAlign