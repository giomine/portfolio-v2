import { NextPage } from "next"

interface Props {
  image: string
  title: string
  tech: string
  description: string
}

const RightAlign: NextPage<Props> = (props) => {
  const { image, title, tech, description } = props
  return (
    <div className="container right-container">
      <div className="text">
        <h3>{title}</h3>
        <p>{tech}</p>
        <p>{description}</p>
      </div>
      <div className="photo" style={{ backgroundImage: `url('${image}')` }}></div>
    </div>
  )
}


export default RightAlign
