import Navbar from "./Navbar/Navbar"
import './Navbar/Navbar.css'
import Home from "./Home/Home"
import './Home/Home.css'
import Benefits from "./Benefits/Benefits"
import './Benefits/Benefits.css'


function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Home />
      <Benefits />
    </>
  )
}

export default App