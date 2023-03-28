import { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home/Home";
import Portfolio from "./Components/Navbar/Portfolio/Portfolio";
import About from "./Components/Navbar/About/About";
import Conatct from "./Components/Navbar/Contact/Conatct";
import Footer from "./Components/Navbar/Footer/Footer";
import Copy from "./Components/Navbar/Copy/Copy";
import Modal from "./Components/Navbar/Modal/Modal";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Navbar/Layout/Layout';
import NotFond from "./Components/Navbar/NotFound/NotFond";
  const router =createBrowserRouter([
  {path: '' , element : <Layout/>,children:[
   {path : 'home' , element:<Home/>},
   {path : 'about',element : <About/>},
   {path : 'portfolio' , element :<Portfolio/>},
   {path : 'footer' , element : <Footer/>},
   {path : 'copy' , element: <Copy/>},
   {path : 'contact' , element : <Conatct/>},
   {path: '*' , element : <NotFond/>}
   



  ]}
 


  ])



 export default class App extends Component{
  state={};
  render(){
   return <>
   <RouterProvider router={router}/>
 

   </>
  }
 }
