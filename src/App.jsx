import { useState } from 'react'
import IntroLogo from './components/IntroLogo'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <IntroLogo onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <div className="min-h-screen">
          <h1 className="text-4xl font-bold text-center mt-20">FlowCoffee</h1>
        </div>
      )}
    </>
  )
}

export default App
