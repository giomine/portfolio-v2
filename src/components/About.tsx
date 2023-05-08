import Tabs from './tabs/Tabs'

const About = () => {
  return (
    <section id="about">
      <div>About me</div>
      <p>My background in translation involves both languages and problem-solving, and these two skills are what sparked my interest in programming back in 2018. I was instantly hooked! I am fascinated by algorithms and absolutely love creating software for people to interact with.</p>
      <p>After creating a few of my own apps and getting involved in some brilliant opportunities as a developer with Moment One and Women Who Code Tokyo, I knew I&apos;d found my place. I joined General Assembly&apos;s Software Engineering Immersive to advance my skills to a professional level and ensure I will add value in the workplace.</p>
      {/* <p>My curiosity, patience, and determination have proven key in my success and an asset in the workplace. I am very excited to bring these qualities to the field of Software Engineering, and I look forward to joining a team that values mentorship, celebrates wins, and is excited about their work.</p> */}
      
      <div>Tech experience tabs</div>
      <Tabs />
    </section>
  )
}


export default About