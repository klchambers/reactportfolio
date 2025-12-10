import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'

function App() {

  return (
    <>
      <Navbar />
      <div className="page-content">
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
