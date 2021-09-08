import React from 'react';
import logo from '../logo.png';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className = {Container}></div>
  <a className="navbar-brand" href="#"><img className = 'logo' src={logo} alt='logo...'/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon= {faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Acasă <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Proceduri</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Licitații</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Proiecte</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Legislație</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Informații utile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cumpărări directe</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Tarife servicii</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
    
  </div>
</nav>
    )



    }

export default Navbar
