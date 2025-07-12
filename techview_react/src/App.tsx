import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LoadingScreen from './components/Loading/LoadingScreen'
import Solutions from './components/Solutions/Solutions'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Header />
      <Hero />
      <div id="solutions">
        <Solutions />
      </div>
    </div>
  )
}

export default App
