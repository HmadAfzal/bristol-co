import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/about"
import ContactUsPage from "./pages/contact"
import HomePage from "./pages/home"
import OpeningHoursPage from "./pages/opening-hours"
import Header from "./components/header"
import Footer from "./components/footer"
import Menu from "./pages/menu"

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactUsPage/>} />
      <Route path='/timing' element={<OpeningHoursPage/>} />
      <Route path='/menu' element={<Menu/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
