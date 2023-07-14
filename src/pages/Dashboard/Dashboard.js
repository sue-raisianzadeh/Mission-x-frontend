import React from 'react';
import Logo from './Logo2.png';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

function AppDash() {
    return (
      <div className="HeaderDash">
     <header className="App-header">
        <img className= "Star" src={Logo2} alt="Logo" />
        <BrowserRouter>
      <NavBar />
        <Switch>
          <Route  exact path="/Screen"><Take Screenshot/></Route>
          <Route exact path="/Help"><Help Center /></Route>
          <Route exact path="/Projects"><More Projects /></Route>
        </Switch>
        </BrowserRouter>
</header>
        <div classname="Dashboard">


</div>
</div>
    );
}
export default Dashboard;
