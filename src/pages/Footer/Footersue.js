import React from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Column from '@material-ui/core/Column';
import "./pages/Footersue/Footersue.css";

  
function Footersue () {
  return (
    <Box className="Box">
  <Container className="Container">
       
          <Column className="Column">
            <h3>COMPANY</h3>
           
            <li><a href="#">About Us</a></li>
            <li><a href="#">Creers</a></li>
            <li><a href="#">Partners</a></li>
          </Column>
          <Column>
            <h3>COURSES</h3>
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Teachers</a></li>
            <li><a href="#">Parents</a></li>
            <li><a href="#">Resources</a></li>
          </Column>
          <Column>
            <h3>SUPPORT</h3>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Helpdesk</a></li>
            <li><a href="#">Contact Us</a></li>
          </Column>
          <Column>
            <h3>LEGAL</h3>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </Column>
          <Column>
            <h3>LEVELUP WORKS</h3>
            <p>LevelUP Works is an Auckland-basedenterprise dedicated to developing gamee-based learning software to help teachers in response to the New Zealand Digital Technologies & Hangarau Matihiko.</p>
            
      <a href="mailto: alan@levelupworks.com"> alan@levelupworks.com</a>
      
      <p>(021) 668 185</p>
     </Column>      
    
   </Container>
  </Box>
  );
};
export default Footersue;