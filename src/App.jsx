import { useState } from 'react'
import IntroLogo from './components/IntroLogo'
import Header from './components/Header'
import Events from './components/Events'
import OurCafe from './components/OurCafe'
import Map from './components/Map'
import CoffeeBrewingWorkshop from './components/CoffeeBrewingWorkshop'
import OurCoffee from './components/OurCoffee'
import Footer from './components/Footer'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <IntroLogo onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <div className="App scroll-smooth">
          <Header />
          <Events id="events" />
          <OurCafe id="cafe" />
          <Map id="map" />
          <CoffeeBrewingWorkshop id="workshops" />
          <OurCoffee id="coffee" />
          <Footer />
        </div>
      )}
    </>
  )
}
