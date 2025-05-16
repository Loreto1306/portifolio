import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Header from './pages/Header.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Footer from './pages/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
  </StrictMode>,
)
