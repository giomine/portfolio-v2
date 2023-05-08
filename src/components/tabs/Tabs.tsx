'use client'
import React, { useState } from 'react'
import Tab from './Tab'

const Tabs = () => {

  const [ activeTab, setActiveTab ] = useState('1')

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const target = e.target as HTMLElement
    console.log(target.id)
    setActiveTab(target.id)
    // console.log(target.id)
  }


  return (
    <>
    <button id='1' onClick={handleClick}>General</button>
    <button id='2' onClick={handleClick}>Moment</button>
    <button id='3' onClick={handleClick}>Women Who Code</button>
    <button id='4' onClick={handleClick}>Open Source</button>

    {activeTab === '1' &&
      <div>
        <Tab
          title='General Assembly Software Engineering Immersive (remote)'
          date='Jan-Apr 2023'
          tech='HTML | CSS | SASS | Styled Components | JavaScript | TypeScript | React | Next.js APIs | Node.js | Express | MongoDB | Mongoose | Python | Django | PostgreSQL Heroku | Netlify | Git | GitHub | NPM | Pipenv | TablePlus | Insomnia | bcrypt | JWT'
          description='An intense, 12-week bootcamp held remotely. Included daily stand ups, lectures, lab work, pair programming, group and individual projects. Modules included Front End Development with Advanced JavaScript, Full-Stack Development with APIs and MERN stack, and Full-Stack Development with Python, Django, and PostgreSQL.'
          />
      </div>
    }

    {activeTab === '2' &&
      <div>
        <Tab
          title='Moment One - Front End Developer Intern (remote)'
          date='Apr-Jun 2021'
          tech='React, Express, MaterialUI'
          description='Translated Figma UI files to the chat app interface for this mental health software startup. Participated in weekly stand ups with senior and junior developers, and used Trello to plan workload.'
          />
        </div>
      }

      {activeTab === '3' &&
        <div>
          <Tab
            title='Women Who Code Tokyo - SpeakHer.jp (remote)'
            date='Mar 2021'
            tech='Vue, JavaScript, HTML, CSS'
            description='Remote group coding with a team of volunteers in Japan to fix issues on speakher.jp, an online resource for finding women speakers in Japan.' 
            />
        </div>
      }

      {activeTab === '4' &&
        <div>
          <Tab
            title='Open source - ‘javascript-problem-solving’ (remote)'
            date='Feb 2023'
            tech='JavaScript'
            description='I am very interested in open source and made my first contribution to a project owned by ‘devvsakib’ called
            ‘javascript-problem-solving’. I paid attention to the requirements for making a pull request and my pull request was quickly accepted.'
            />
        </div>
      }
    </>
  )
}


export default Tabs