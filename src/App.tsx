import Navbar from "./Navbar/Navbar"
import './Navbar/Navbar.css'
import Home from "./Home/Home"
import './Home/Home.css'
import Benefits from "./Benefits/Benefits"
import './Benefits/Benefits.css'
import Testimonials from "./Testimonials/Testimonials"
import './Testimonials/Testimonials.css'
import Faqs from "./Faqs/Faqs"
import './Faqs/Faqs.css'
import Booking from "./Booking/Booking"
import './Booking/Booking.css'
import Footer from "./Footer/Footer"
import './Footer/Footer.css'


function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Home />
      <Benefits />
      <Testimonials />
      <Faqs />
      <Booking />
      <Footer />
    </>
  )
};

export default App