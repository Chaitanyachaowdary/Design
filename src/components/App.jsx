import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Latest from './screens/Latest'
import Contact from './screens/Contact'
import Header from './header/Header'
import Menu from './nav/Menu'
import Footer from './footer/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* <Header/> */}
    <Menu/>
      <Routes>
         <Route  element={<Home/>}  path='/'/>
        <Route  element={<Home/>}  path='/home'/>
        <Route  element={<About/>}  path='/about'/>
        <Route  element={<Latest/>}  path='/latest'/>
        <Route  element={<Contact/>}  path='/contact'/>
        <Route  element={<Home/>}  path='/home'/>
      </Routes>
       
      <Footer/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
