import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className="header">
        <ul className='header__nav'>
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
       
        </div>
    )
}

export default Header
