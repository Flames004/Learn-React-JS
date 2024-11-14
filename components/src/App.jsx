import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
/*
<>....</> are called fragments. They are empty tags and act as wrapper to contain all the html content.
We will learn about components in this tutorial...
Make the 'components' folder inside the src file and always remember to name the file starting from capital letter like Header.jsx

*/
const App = () => {
  return (
    <>
    <Navbar />
    <Main />
    <Main />
    <Main />
    <Main />
    <Footer />
    </>
  )
}

export default App