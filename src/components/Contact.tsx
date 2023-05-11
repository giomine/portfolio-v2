import '../app/styles/contact.scss'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact-container">
        <h2>Contact me</h2>
        <p>I&apos;m always happy to receive mail! Whether you have a question or just want to say hi, I&apos;d love to hear from you.</p>

        <div>
          <a target="_blank" href="https://www.linkedin.com/in/giorgia-rm/"><Image alt={'linkedin'} src={'/icons/linkedin.png'} height={30} width={30} /></a>
          <a target="_blank" href="https://github.com/giomine"><Image alt={'github'} src={'/icons/github-sq-whitee.png'} height={30} width={30} /></a>
          <a target="_blank" href="mailto:giomineo@gmail.com"><Image alt={'gmail'} src={'/icons/gmail.png'} height={30} width={40} /></a>
        </div>
        
      </div>
    </section>
  )
}


export default Contact