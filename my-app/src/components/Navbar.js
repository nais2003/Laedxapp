import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './assets/logo-laedx.png'; // Ensure this path is correct
import "../styles/Navbar.css";
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className={`leftSide ${openLinks ? "open" : "close"}`}>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="textContainer">
           {/*<p>Identifier la clientèle cible :</p> */}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/" className="link"> Home </Link>
        <Link to="/menu" className="link"> Menu </Link>
        <Link to="/about" className="link"> About </Link>
        <Link to="/Clientsptnt" className="link"> Clientsptnt </Link>
      </div>
    </div>
  );
}
export default Navbar;
