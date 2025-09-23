import { Route, Routes } from "react-router-dom"
import ResumeGenerator from "./pages/ResumeGenerator"
import LandingPages from "./pages/LandingPages"
import Header from './components/Header'
import Footer from './components/Footer'
import PageNotFound from "./pages/PageNotFound"
import Form from "./pages/Form"
import History from "./pages/History"





function App() {
 

  return (
    <>
    {/* routing b/w these component, ie handle different pages */}
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPages/>}></Route>
        {/* / initial landing page so we use /, eg of a higher order component */}
        <Route path="/resumegenerator" element={<ResumeGenerator/>}></Route>
        {/* /resumegenerator the page we want to go similarly the rest we are routing and linking them */}

         <Route path="/form" element={<Form/>}></Route>

        <Route path="/history" element={<History/>}></Route>

        <Route path="/*" element={<PageNotFound/>}></Route>
        {/* anyother link or page other than the ones we route is entered we get page not found ie why we use /*  */}

      </Routes>
      <Footer/>
    </>
  )
}

export default App
