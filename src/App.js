import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import SideCheckbox from "./pages/Projects/Components/SideCheckbox";
import Navbar from './Components/Navbar';

import Projects from "./pages/Projects/Projects";
import Footer from './Components/Footer';


import "./App.css";

import Logo2 from "./assets/logo2.png";
import NZFlag from "./assets/NZFlag.jpg";
import MaoriFlag from "./assets/MaoriFlag.jpg";

function App() {
  return (
    <div classname="App">
      <div>
       <header className="App-header">
       <img className="Star" src={Logo2} alt="Logo" />
          <BrowserRouter>
          <NavBar />
          <Switch>
             <Route exact path="/">Home</Route>
             <Route exact path="/Projects.js">Teacher</Route>
           <Route exact path="/Teachers.js">Project</Route>
         </Switch>
         </BrowserRouter>
        <div className="flag">
       <p className="lang">Lang</p>
           <img className="flag" src={NZFlag} alt="Logo" />
           <img className="flag" src={MaoriFlag} alt="Logo" />
       </div>
     </header>

      <h3 className="h3">Projects</h3>
      <p className="p1">
        Welcome to the project library. You can use the filters on the roght to
        help you search for specific Projects.
      </p>

      <div className="buttons">
        <button className="button">
          <a href="/Beginner.js">BEGINNER</a>
        </button>
        <button className="button">INTERMEDIATE</button>
        <button className="button">ADVANCED</button>

        <div className="numbers">
          <p className="show">Show</p>
          <button className="number">25</button>
          <button className="number">50</button>
          <button className="number">100</button>
        </div>
      </div>
      
      <div className="sidePic">
        <SideCheckbox />
        <Projects />
        </div>
        
        <div>
        
      </div>
      <div className="endButtons">
        <button className="TopButton" >
          <a href="../logo2.png">BACK TO TOP</a>
        </button>

        <button className="Dashboard">
          <a href="../Dashboard.js">BACK TO DASHBOARD</a>
        </button>
     </div>
    </div>
    <div>
    <Footer />
    </div>  
    </div>
  );
  
}

export default App;
