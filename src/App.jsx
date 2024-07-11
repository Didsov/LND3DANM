import { BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Expirience from "./components/Expirience"
import Tech from "./components/Tech"
import Works from "./components/Works"
import Contact from "./components/Contact"
import StarsCanvas from "./components/canvas/StarsCanvas"


function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary flex flex-col">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar/>
          <Hero/>
        </div>
        <About/>
        <Expirience/> 
        <Tech/> 
        <Works/>
        <div className="relative z-0">
          <Contact/> 
          <StarsCanvas/> 
          </div>
      </div>
    </BrowserRouter>
  
  )
}

export default App
