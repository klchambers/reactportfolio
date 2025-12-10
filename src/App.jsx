import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <>
      <a id="top"></a>
      <Navbar />
      <div className="page-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
