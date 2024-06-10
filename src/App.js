import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState("general");

 
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </>
  )
}

export default App