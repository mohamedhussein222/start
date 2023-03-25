import { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home/Home";
import Portfolio from "./Components/Navbar/Portfolio/Portfolio";
import About from "./Components/Navbar/About/About";
import Conatct from "./Components/Navbar/Contact/Conatct";
import Footer from "./Components/Navbar/Footer/Footer";
import Copy from "./Components/Navbar/Copy/Copy";
import Modal from "./Components/Navbar/Modal/Modal";
import NotFond from "./Components/Navbar/NotFound/NotFond";
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 

 const router =  createBrowserRouter([
  {path:'home', element:<Home/> },
  {path : 'portfolio' , element : <Portfolio/> },
  {path : 'about' , element:<About/>},
  {path : 'footer' , element:<Footer/>},
  {path : 'contact' , element:<Conatct/>},
  {path : 'navbar' , element: <Navbar/>},
  


])
 export default class App extends Component{
  state={};
  render(){
   return <>
<Navbar/>
<Home/>
<Portfolio/>
<Modal/>
<About/>
<Conatct/>
<Footer/>
<Copy/>

 
  

   </>
  }
 }