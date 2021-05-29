import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <b className="text-white homelink" aria-hidden="true">
          home
      </b>
      </Link>
    </div>
  )
}

export default Header
