import { motion } from 'framer-motion'
import stockPhoto1 from '../assets/photos/stock_photo1.jpg'

export default function CoffeeBrewingWorkshop() {
  return (
    <section
      id="workshop"
      className="min-h-screen flex items-center bg-gray-100 px-16"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0 }}
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Szkolenia z parzenia kawy</h2>
          <p className="text-lg leading-relaxed">
            Naucz się sztuki parzenia kawy od naszych baristów – od espresso po
            alternatywne metody jak chemex i aeropress.
          </p>
        </div>

        <motion.img
          src={stockPhoto1}
          alt="Warsztaty kawowe"
          className="flex-1 rounded-2xl shadow-lg object-cover w-full h-[400px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0 }}
        />
      </motion.div>
    </section>
  )
}
