import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return <div>

<nav class="navbar navbar-expand-lg  fixed-top z-2">
        <div class="container-lg navbar-container w-75">
          <a class="navbar-brand" href="#">START REACT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active mx-2" aria-current="page" href="#home">PORTFOLIO</a>
              </li>
             
              <li class="nav-item mx-2">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item mx-2">
              <a class="nav-link" href="#services">Contact</a>
              </li>
              
              
            
             
            </ul>
           
          </div>
        </div>
      </nav>
        </div>
    
      
    }
}

export default Navbar;