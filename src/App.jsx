import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

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
      </div>
    </>
  )
}

export default App
