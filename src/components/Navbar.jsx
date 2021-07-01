import React from 'react'
import logo from '../assets/images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import pageLinks from '../constants/links'
import { Link } from 'gatsby'
const Navbar = ({toggleSidebar}) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} alt='web dev' /> */}
          <h2 className="nav-title">Joe's <span>Portfolio</span></h2>
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className='nav-links'>
          {pageLinks.map(link => (
            <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
