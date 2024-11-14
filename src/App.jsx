import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Login from './Components/Login'
import Header from './Components/header'
import Footer from './Components/Footer'
import Sign from './Components/Sign'

function App() {

  return (
    <>
    <div className='px-16'>
      <Header/>
      <Login />
    </div>
    <Footer />   
    </>
  )
}

export default App
