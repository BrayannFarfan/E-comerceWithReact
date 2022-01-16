import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Dropdown } from './Dropdown';
import { CartWidgle } from './CartWidget';
import { GiBeerStein } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import { UserAuthContext } from "../../context/UserAuthContext"

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const { isAuthenticated , logout} = useContext(UserAuthContext);
  


  return (
    <>
      <nav className='navbar'>
    
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <GiBeerStein size={"2em"} className='nav-icon'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='/team'
              className='nav-links'
              onClick={closeMobileMenu}
            >
               Team
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Category <FaAngleDown />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li> 
            <li>
            { ! isAuthenticated  || <button onClick={logout} className='nav-out '>Sign Out</button>}
            </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <CartWidgle />
            </Link>
          </li>
          
        </ul>
      
           
      </nav>
    </>
  );
}
