import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

function App() {
  const data = useContext(DataContext)
  console.log("App:", data)
  return (
    <div>
      <h1>This is App.js</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App