
import './App.css'
import Header from './components/Header'
import OrbitSystem from './components/OrbitSystem'
import StatsSection from './components/StatsSection'
import FeatureSection from './components/ FeatureSection'
import ScrollCards from './components/ScrollCards'
import Simple from './components/Simple'
import TestimonialCard from './components/TestimonialCard'
import Card from './components/Card'
import CTASection from './components/CTASection'
import Divider from './components/Divider'
import Footer from './components/Footer'
import HoverCard from './components/HoverCard'
import ServicesSection from './components/ServicesSection'
import ContactForm from './components/ContactForm'
import Contacct from './components/Contacct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element : <><Header/><OrbitSystem/><StatsSection/> <FeatureSection/><Simple/><ScrollCards/> <Card/><CTASection/><Footer/></>
    }
  ])

  return (
    <>
    < RouterProvider router={router}/>
    </>
  )
}

export default App
