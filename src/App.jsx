
import Home from './components/Home/Home'
import About from './components/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import{Route ,Routes} from 'react-router-dom'




function App() {


  return (
    <>
    <Header/>
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Portfolio/> */}
    {/* <Contact/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Portfolio' element={<Portfolio/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
    <Footer/>
 
    </>
  )
}

export default App
