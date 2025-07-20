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
import DarkModeToggle from './components/UI/DarkModeToggle'
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
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-500">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Header />
      <DarkModeToggle />
      
      {/* ScrollSmoother wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <div id="solutions">
            <Solutions />
          </div>
          <div id="results">
            <Results />
          </div>
          <div id="blog">
            <Blog />
          </div>
          <div id="ourteams">
            <OurTeams />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
