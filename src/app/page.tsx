import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Features from "./Components/Features"
import Courses from "./Components/Courses"
import Footer from "./Components/Footer"
export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Courses/>
      <Features/>
      <Footer/>
    </main>
  )
}