import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

export default function IntroLogo({ onFinish }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      if (onFinish) onFinish()
    }, 1500)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="Logo" className="w-1/2 max-w-xs" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
