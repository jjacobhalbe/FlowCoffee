import hero from '../assets/photos/hero.jpg'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="relative h-[75vh] w-full">
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-32"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-16">
        <Navbar />
      </div>
    </header>
  )
}
