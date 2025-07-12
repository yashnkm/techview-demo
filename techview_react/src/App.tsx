import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LoadingScreen from './components/Loading/LoadingScreen'
import Solutions from './components/Solutions/Solutions'
import About from './components/About/About'
import { scrollManager } from './utils/scrollSmoother'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    if (!isLoading) {
      // Initialize ScrollSmoother after loading completes
      scrollManager.init()
    }
  }, [isLoading])

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Header />
      
      {/* ScrollSmoother wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <div id="solutions">
            <Solutions />
          </div>
          <div id="about">
            <About />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
