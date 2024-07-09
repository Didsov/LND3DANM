import { BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"


function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary flex flex-col">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar/>
          <Hero/>
        </div>
        <p>About</p> 
        <p>Exprerience</p> 
        <p>Tech</p> 
        <p>Works</p> 
        <p>Feedbacks</p> 
        <div className="relative z-0">
          Contact 
          StarsCanvas 
          </div>
      </div>
    </BrowserRouter>
  
  )
}

export default App
