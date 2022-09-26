import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import { Route, Routes, Navigate} from "react-router-dom";
import Footer from './Footer';

const App = () => {
  return (
    <>
    <Navbar/>
     
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to = "/"/>}/>
    </Routes>

    <Footer/>
    
    </>
  )
}

export default App;