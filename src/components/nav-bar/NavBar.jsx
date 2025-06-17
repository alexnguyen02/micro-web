import { useState } from 'react'; 
import "./NavBar.css"; 
import logo from "../../assets/micro_logo.png"; 
import ham_menu from "../../assets/hamburger-menu.png"; 
import close_menu from "../../assets/close-menu.png"; 

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false); 
  const [interacted, setInteracted] = useState(false); 

  // Toggle the navigation bar on mobile screen
  function toggleMenu() {
    setInteracted(true); 

    if (menuActive === false) {
      setMenuActive(true); 
    } else {
      setMenuActive(false); 
    }
  }

  return (
    <nav className="nav-bar">
      <a href="/">
        <img src={logo} alt="Text logo of micro with a cloth hanger being a lowercase r letter" width="130"/>
      </a>
      <ul className={`nav-menu ${menuActive ? "active" : ""} ${interacted ? "toggling" : ""}`}>
        <li className="start">Get started</li>
        <li className="about">About</li> 
        <li className="contact">Contact</li>
      </ul>
      <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label={menuActive ? "Navigation bar is open" : "Navigation bar is close"}
      >
        {/* Conditionally render the menu icon based whether the menu is open or close  */}
        <img src={menuActive ? close_menu : ham_menu} alt="Navigation menu close icon" width={44}/>
      </button>

    </nav>
  ); 
}

export default NavBar; 