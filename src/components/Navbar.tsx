import Link from "next/link"

export default function Navbar(){

  return (
    <div className="navbar">
      <Link href={'#home'}>Home</Link>
      <Link href={'#about'}>About</Link>
      <Link href={'#experience'}>Experience</Link>
      <Link href={'#skills'}>Skills</Link>
      <Link href={'#projects'}>Projects</Link>
      <Link href={'#work'}>Work</Link>
      <Link href={'#hobbies'}>Hobbies</Link>
      <Link href={'#contact'}>Contact</Link>
    </div>
  )
}