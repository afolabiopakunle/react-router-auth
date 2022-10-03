import React from "react";
import "./style.css";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

export default function App() {
  return (
    <>
    <div>
     <nav>
       <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/about'>About</Link></li>
         </ul>
     </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      </Routes>
      </>
  );
}
