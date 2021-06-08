import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/index';
import about from './Pages/about';
import menu from './Pages/menu';
import DropDown from './Components/DropDown';
import { useEffect, useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 786 && isOpen){
        setIsOpen(false);
        console.log('resize');
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <div>
      <Router>
      <Navbar toggle={toggle}></Navbar>
      <DropDown isOpen={isOpen} toggle={toggle}></DropDown>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/menu" component={menu}></Route>
        <Route path="/about" component={about}></Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
