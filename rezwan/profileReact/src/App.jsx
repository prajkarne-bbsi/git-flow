import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'

import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
