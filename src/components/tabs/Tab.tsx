import { NextPage } from 'next';

interface Props {
  title: string
  date: string
  tech: string
  description: string
}

const Tab: NextPage<Props> = (props) => {

  const { title, date, tech, description } = props
  return (
    <div>
      <h3>{title}</h3>
      <p className="tech no-mb">{date}</p>
      <p className="tech">{tech}</p>
      <p>{description}</p>
    </div>
  )
}


export default Tab