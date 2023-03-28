import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Copy from '../Copy/Copy';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Navbar from '../Navbar';

class Layout extends Component {
    render() {
        return <>
            <Navbar/>
           
       <Outlet/>
       <Footer/>
       <Copy/>
        
        
        </>
    }
}

export default Layout;