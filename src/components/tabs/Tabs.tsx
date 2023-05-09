'use client'
import React, { useState } from 'react'
import Tab from './Tab'

const Tabs = () => {

  const [ activeTab, setActiveTab ] = useState('1')

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const target = e.target as HTMLElement
    setActiveTab(target.id)
  }


  return (
    <div className='tabs-container'>
      <div className='buttons-container'>
        <button id='1' onClick={handleClick} className={activeTab === '1' ? 'active' : ''}>General Assembly</button>
        <button id='2' onClick={handleClick} className={activeTab === '2' ? 'active' : ''}>Moment One</button>
        <button id='3' onClick={handleClick} className={activeTab === '3' ? 'active' : ''}>Women Who Code</button>
        <button id='4' onClick={handleClick} className={activeTab === '4' ? 'active' : ''}>Open Source</button>
      </div>

      {activeTab === '1' &&
        <div className='tab'>
          <Tab
            title='General Assembly Software Engineering Immersive (remote)'
            date='Jan-Apr 2023'
            tech='HTML | CSS | SASS | Bootstrap | JavaScript | React | APIs | Node.js | Express | MongoDB | Mongoose | Python | Django | PostgreSQL Heroku | Netlify | Git | GitHub | NPM | Pipenv | TablePlus | Insomnia | bcrypt | JWT'
            description='An intense, 12-week bootcamp held remotely. Included daily stand ups, lectures, lab work, pair programming, group and individual projects. Modules included Front End Development with Advanced JavaScript, Full-Stack Development with APIs and MERN stack, and Full-Stack Development with Python, Django, and PostgreSQL.'
            />
        </div>
      }

      {activeTab === '2' &&
        <div className='tab'>
          <Tab
            title='Moment One - Front End Developer Intern (remote)'
            date='Apr-Jun 2021'
            tech='React, Express, MaterialUI'
            description='Translated Figma UI files to the chat app interface for this mental health software startup. Participated in weekly stand ups with senior and junior developers, and used Trello to plan workload.'
            />
          </div>
        }

        {activeTab === '3' &&
          <div className='tab'>
            <Tab
              title='Women Who Code Tokyo - SpeakHer.jp (remote)'
              date='Mar 2021'
              tech='Vue, JavaScript, HTML, CSS'
              description='Remote group coding with a team of volunteers in Japan to fix issues on speakher.jp, an online resource for finding women speakers in Japan.' 
              />
          </div>
        }

        {activeTab === '4' &&
          <div className='tab'>
            <Tab
              title='Open source - ‘javascript-problem-solving’ (remote)'
              date='Feb 2023'
              tech='JavaScript'
              description='I am very interested in open source and made my first contribution to a project owned by ‘devvsakib’ called
              ‘javascript-problem-solving’. I paid attention to the requirements for making a pull request and my pull request was quickly accepted.'
              />
          </div>
        }
    </div>
  )
}


export default Tabs