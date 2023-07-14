import React from 'react'; 
import './NavBar.css';

             function NavBar() {
                 return (
                
                   <div>
                    <ul className="NavBar">
                   <li><a href="/">HOME </a> </li>
                      <li><a href="/Projects"> PROJECTS</a> </li>
                    <li><a href="/Teachers">TEACHERS </a> </li>
             </ul> 
             </div> 
                  
              /* <div>
       
       <img className="Star" src={Logo2} alt="Logo" />
          <BrowserRouter>
          <NavBar />
          <Switch>
             <Route exact path="/">Home</Route>
             <Route exact path="/Projects.js">Teacher</Route>
           <Route exact path="/Teachers.js">Project</Route>
         </Switch>
         </BrowserRouter>
         </div>
        <div className="flag">
       <p className="lang">Lang</p>
           <img className="flag" src={NZFlag} alt="Logo" />
           <img className="flag" src={MaoriFlag} alt="Logo" />
       </div>
     </header>
     </div> */
 );  
};

export default NavBar;