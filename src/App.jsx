import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
//import { Home } from 'lucide-react'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      {/* <Home/> */}
      <Recipe />
      </>

  )
}

export default App
