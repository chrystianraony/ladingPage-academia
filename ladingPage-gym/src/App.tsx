import './App.css'
import Hero from './components/Hero'
import Plans from './components/Plans/Plans'
import Programs from './components/Programs/Programs'
import Reason from './components/Reason/Reason'

function App() {
  
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
    </div>
  )
}

export default App
