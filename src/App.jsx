
import Inicio from './components/Inicio';
import './App.css'
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';
import SideNav from './components/SideNav';

function App() {
  

  return (
    <Router>
    <SideNav/>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Inicio} />
    <Route path="/inicio" component={Inicio} />
    <Route path="/acercade" exact component={AcercaDe} />
    <Route path="/contacto" exact component={Contacto} />

    </Switch> 
    
     
    </Router>
  )
}

export default App
