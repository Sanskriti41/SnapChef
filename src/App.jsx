import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Scan from './pages/Scan'
import About from './pages/About'
import Explore from './pages/Explore'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className=" bg-gray-100">

          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/scan" element={<Scan />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />

            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

      </div>

  )
}

export default App