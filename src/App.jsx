import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Suggestion from './components/suggestion'

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
       <div className="content">
        <Home></Home>
        <Suggestion></Suggestion>
      </div>
    </div>
  )
}

export default App
