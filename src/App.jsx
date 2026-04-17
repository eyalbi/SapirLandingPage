import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import AboutSatya from './components/sections/AboutSatya'
import InstructorBio from './components/sections/InstructorBio'
import Booking from './components/sections/Booking'

export default function App() {
  return (
    <div className="font-hebrew min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <AboutSatya />
        <InstructorBio />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
