import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo/intro.png'

export default function IntroLogo({ onFinish }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait" onExitComplete={onFinish}>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
        >
          <img src={logo} alt="Logo" className="w-9/10 max-w-md" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
