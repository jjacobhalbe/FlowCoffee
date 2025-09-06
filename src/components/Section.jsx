export default function Section({ id, title }) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-100/80 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100/80 to-transparent pointer-events-none"></div>
      <h2 className="text-3xl font-bold z-10 relative">{title}</h2>
    </section>
  )
}
