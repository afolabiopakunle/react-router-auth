import React from "react";
import "./style.css";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Rewards from './components/Rewards';

export default function App() {
  return (
    <>
    <div>
     <nav>
       <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/rewards'>Rewards</Link></li>
         <li><Link to='/about'>About</Link></li>
         </ul>
     </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/rewards' element={<Rewards />} />
      <Route path='/about' element={<About />} />
      </Routes>
      </>
  );
}
