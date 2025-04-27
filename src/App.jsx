import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWorks"

function App() {

  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights/>
        <Model />
        <HowItWorks/>
        <Footer/>
      </main>
    </>
  )
}

export default App
