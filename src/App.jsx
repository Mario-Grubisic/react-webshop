import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { MainComponent } from './Components/Main/MainComponent'
import { Footer } from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  )
}

export default App
