import React,{useState} from 'react';
import {Navbar,Nav,NavbarBrand,NavbarToggler,NavbarText,NavLink,NavItem,Collapse} from 'reactstrap';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

  return <div>
       <Navbar
    color="dark"
    dark
    expand="md"
    
  >
    <NavbarBrand href="/">
      House Of Food
    </NavbarBrand>
    <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
    <Collapse navbar isOpen={isOpen}>
      <Nav
        className="me-auto"
        navbar
        style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}

      >
        <NavItem>
          <NavLink href="/">
            Inicio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Platos
          </NavLink>
        </NavItem>
        
      </Nav>
      <NavbarText>
        Log Out
      </NavbarText>
    </Collapse>
  </Navbar>
  </div>;
}

export default Header;
