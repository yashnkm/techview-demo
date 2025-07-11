import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LoadingScreen from './components/Loading/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Show content after a brief delay for the slide-up animation
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && <Header />}
      <Hero />
    </div>
  )
}

export default App
