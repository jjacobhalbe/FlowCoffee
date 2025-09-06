import { motion } from 'framer-motion'
import stockPhoto2 from '../assets/photos/stock_photo2.jpg'

export default function OurCafe() {
  return (
    <section
      id="cafe"
      className="min-h-screen flex items-center bg-white px-16"
    >
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Nasza kawiarnia</h2>
          <p className="text-lg leading-relaxed">
            FlowCoffee to miejsce spotkań, pracy i relaksu. Wnętrze łączy
            nowoczesny design z przytulnym klimatem.
          </p>
        </div>
        <motion.img
          src={stockPhoto2}
          alt="Nasza kawiarnia"
          className="flex-1 rounded-2xl shadow-lg object-cover w-full h-[400px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        />
      </motion.div>
    </section>
  )
}
