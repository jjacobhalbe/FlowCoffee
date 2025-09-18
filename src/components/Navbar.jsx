export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-column items-center md:items-start justify-center md:justify-end gap-4 md:gap-8 text-black font-semibold text-lg md:text-3xl">
      <a href="#events" className="hover:underline">
        Eventy
      </a>
      <a href="#cafe" className="hover:underline">
        Nasza kawiarnia
      </a>
      <a href="#map" className="hover:underline">
        Gdzie jesteśmy?
      </a>
      <a href="#workshop" className="hover:underline">
        Szkolenia
      </a>
      <a href="#coffee" className="hover:underline">
        Nasza kawa
      </a>
    </nav>
  )
}
