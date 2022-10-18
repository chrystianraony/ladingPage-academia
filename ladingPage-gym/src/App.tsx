import './App.css'
import Hero from './components/Hero'
import Join from './components/Join/Join'
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
      <Join />
    </div>
  )
}

export default App
