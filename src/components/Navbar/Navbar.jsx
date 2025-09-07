import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleMenuClick = (name) => {
    setMenu(name);
    setOpen(false); // close menu on click (for mobile)
  };

  return (
    <div className='navbar'>
      <div className="nav-name">
        Dev-Aman
      </div>

      {/* Hamburger icon for mobile */}
      <div className={`hamburger ${open ? 'active' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${open ? 'open' : ''}`}>
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleMenuClick("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt='' /> : null}
        </li>
       
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => handleMenuClick("work")}>Projects</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt='' /> : null}
        </li>
        {/* connect button in mobile menu */}
        <li className="nav-connect-mobile">
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => handleMenuClick("contact")}>
            Connect with me
          </AnchorLink>
        </li>
      </ul>

      
    </div>
  );
};

export default Navbar;