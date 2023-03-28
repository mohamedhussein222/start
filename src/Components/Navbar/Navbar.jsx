import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home/Home';
class Navbar extends Component {

    render() {
        return <>

<nav className="navbar navbar-expand-lg fixed-top z-2">
        <div className="container-lg navbar-container w-75">
          <Link className="navbar-brand" to="home">START REACT</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-2" aria-current="page" to="portfolio">Portfolio</Link>
              </li>
             
              <li className="nav-item mx-2">
                <Link className="nav-link" to="about">About</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>
            
            
             
            </ul>
           
          </div>
        </div>
      </nav>



<Home/>
</>
      
    }
}

export default Navbar;
