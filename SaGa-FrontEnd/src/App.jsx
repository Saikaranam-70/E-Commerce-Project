import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categories'
import TopDiscounts from './components/TopDiscounts/TopDiscounts'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import SignUp from './components/SignUp/SignUp'

const App = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <TopDiscounts />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
