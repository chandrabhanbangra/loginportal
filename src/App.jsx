import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Layouts/Footer/Header/Header'
import ProgressBar from './Layouts/Footer/Header/Main/SingupProgressbar/ProgressBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ProgressBar/>
    </>
  )
}

export default App
