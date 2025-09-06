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

      <div className="absolute bottom-0 left-0 w-full h-32 from-white/80 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg leading-tight text-center md:text-left">
          Flow
          <br />
          Coffee.
        </h1>

        <div className="mt-6 md:mt-0 w-full md:w-auto">
          <Navbar />
        </div>
      </div>
    </header>
  )
}
