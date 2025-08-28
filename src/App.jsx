import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import TechStack from "./Components/TechStack"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <div className="bg-blue-950 h-auto w-full overflow-hidden">
         <Navbar />
         <Home />
         {/* <About /> */}
         <TechStack />
         <Projects />
         <Contact />
         <Footer />
      </div>
    </>
  )
}

export default App
