import { motion } from 'framer-motion'
import stockPhoto1 from '../assets/photos/stock_photo1.jpg'

export default function Events() {
  return (
    <section
      id="events"
      className="min-h-screen flex items-center bg-gray-100 px-16"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Eventy w FlowCoffee</h2>
          <p className="text-lg leading-relaxed">
            Organizujemy degustacje, spotkania tematyczne i koncerty akustyczne.
            Dołącz do naszej społeczności kawowych pasjonatów!
          </p>
        </div>

        <motion.img
          src={stockPhoto1}
          alt="Eventy w kawiarni"
          className="flex-1 rounded-2xl shadow-lg object-cover w-full h-[400px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </motion.div>
    </section>
  )
}
