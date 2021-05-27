import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className='header'>
      <Link to="/#projects">
        <h1>Home</h1>
      </Link>
    </div>
  )
}

export default Header
