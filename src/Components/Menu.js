
import React from 'react';
import {Link} from "react-router-dom"
import {Navbar,Nav} from 'react-bootstrap'


const styles = {

  diseño: {
    
      fontSize : "30px",
      top: " 70px",
     
      textAlign : "center",
      margin:"right",
      display:"block",
      width: "80rem",



  }
}



function Menu() {
  
    return (
      <div>

<Navbar styles={styles.diseño} bg="dark" variant="dark">
    
    <Navbar.Brand to="/">Cocina ItaloArgentina</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/home" >Home</Nav.Link>
              <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              
    </Nav>
    
  </Navbar>


        
  
      </div>
    );
  
  
}

export default Menu;