import { useState } from 'react'
import LandingPage from './components/LandingPage'
import './App.css'
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    
    <Navbar/>
    <Switch>
    <Route path="/" exact component={LandingPage} />

    </Switch> 
    
     
    </Router>
  )
}

export default App
