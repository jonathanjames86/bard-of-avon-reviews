import React from 'react';
import shakeBro from '../../resources/shake-bro-avatar.png';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <img src={shakeBro} className="App-logo" alt="logo" />
    <h1 className="App-title">
        Header Component
    </h1>
  </header>
);

export default Header;