import React from 'react';
import logo from '../../resources/logo.svg';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">
        Header Component
    </h1>
  </header>
);

export default Header;