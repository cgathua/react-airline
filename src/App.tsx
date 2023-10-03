import Navbar from "./Navbar/Navbar"
import './Navbar/Navbar.css'
import Home from "./Home/Home"
import './Home/Home.css'


function App(): JSX.Element {
  return (
    <>
      <Navbar />
      < Home/>
    </>
  )
}

export default App