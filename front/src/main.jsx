import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HeroSection from './Component/HeroSection.jsx'
import Footer from './Component/Footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroSection/>
    <Footer/>
  </React.StrictMode>,
)
