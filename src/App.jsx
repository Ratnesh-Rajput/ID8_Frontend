import { useState } from 'react'
import NavBar from "./components/NavBar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar></NavBar>
   <div className='text-3xl'>Tailwind Works</div>
   </> 
  )
}

export default App
