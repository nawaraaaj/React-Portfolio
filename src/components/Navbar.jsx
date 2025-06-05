

import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import contact from "../assets/contact.png";
import menu from '../assets/menu.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        
        <div className="destopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="destopMenuListItem"
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="destopMenuListItem"
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="destopMenuListItem"
          >
            Portfolio
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="destopMenuListItem"
          >
            Contact
          </Link>
        </div>

        <button className="destopMenuBtn">
          <img
            src={contact}
            alt="Contact Icon"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="destopMenuImg"
          />
          Contact Me
        </button>

        <img src={menu} alt="mobMenu" className="mobMenu" onClick={()=> setShowMenu(!showMenu)} />
        
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="listItem" onClick={()=>setShowMenu(false)}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="listItem" onClick={()=>setShowMenu(false)}
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="listItem" onClick={()=>setShowMenu(false)}
          >
            Portfolio
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="listItem" onClick={()=>setShowMenu(false)}
          >
            Contact
          </Link>

        </div>

      </nav>
    </div>
  );
};

export default Navbar;
