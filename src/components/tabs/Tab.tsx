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
      <div>{title}</div>
      <div>{date}</div>
      <div>{tech}</div>
      <div>{description}</div>
    </div>
  )
}


export default Tab