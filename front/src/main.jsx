import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HeroSection from './Component/HeroSection.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Header from './Component/Header/Header.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header/>
    <HeroSection/>
    <Footer/>
  </React.StrictMode>,
)
