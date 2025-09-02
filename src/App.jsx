import { useState } from 'react'
import IntroLogo from './components/IntroLogo'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <IntroLogo onFinish={() => setShowIntro(false)} />}
      {!showIntro && <div className="min-h-screen"></div>}
    </>
  )
}

export default App
