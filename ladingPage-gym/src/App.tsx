import './App.css'
import Hero from './components/Hero'
import Plans from './components/Plans/Plans'
import Program from './components/Program/Programs'
import Reason from './components/Reason/Reason'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testimonials />
    </div>
  )
}

export default App
