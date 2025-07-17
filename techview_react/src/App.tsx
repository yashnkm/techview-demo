import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LoadingScreen from './components/Loading/LoadingScreen'
import Solutions from './components/Solutions/Solutions'
import Results from './components/Results/Results'
import Blog from './components/Blog/Blog'
import OurTeams from './components/OurTeams/OurTeams'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
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
    <div className="min-h-screen bg-white debug-outline">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Header />
      
      {/* ScrollSmoother wrapper */}
      <div id="smooth-wrapper" className="debug-outline-blue">
        <div id="smooth-content" className="debug-outline-green">
          <Hero />
          <div id="solutions" className="debug-outline-yellow">
            <Solutions />
          </div>
          <div id="results" className="debug-outline-purple">
            <Results />
          </div>
          <div id="blog" className="debug-outline">
            <Blog />
          </div>
          <div id="ourteams" className="debug-outline">
            <OurTeams />
          </div>
          <div id="contact" className="debug-outline">
            <Contact />
          </div>
          <div id="footer" className="debug-outline">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
