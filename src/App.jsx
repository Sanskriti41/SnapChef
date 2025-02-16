import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Recipe from './pages/Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipe />} />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App