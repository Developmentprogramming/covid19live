import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CasesTable from './components/CasesTable/CasesTable'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CasesTable />
      <Footer />
    </div>
  )
}

export default App;