import Navbar from "./Navbar/Navbar"
import './Navbar/Navbar.css'
import Home from "./Home/Home"
import './Home/Home.css'
import Benefits from "./Benefits/Benefits"
import './Benefits/Benefits.css'
import Testimonials from "./Testimonials/Testimonials"
import './Testimonials/Testimonials.css'


function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Home />
      <Benefits />
      <Testimonials />
    </>
  )
}

export default App