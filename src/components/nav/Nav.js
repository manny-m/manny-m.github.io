import React from 'react';
import './Nav.css';

const NavItem = (props) =>{
  return(
    <div className="NavItem"> 
      {props.children}
    </div>
  )    
}


function Nav() {
  return (
    <div className="Nav">
      <NavItem>About</NavItem>
      <NavItem>Experience</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Creative</NavItem>
    </div>
  );
}

export default Nav;
