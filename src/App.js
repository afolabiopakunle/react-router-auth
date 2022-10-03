import React from "react";
import "./style.css";
import { Routes, Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Rewards from './components/Rewards';
import UserContext from './authentications/UserContext'
export default function App() {
  return (
    <>
    <div>
     <nav>
       <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/about'>About</Link></li>
         <li><Link to='/rewards'>Rewards</Link></li>
       </ul>
     </nav>
    </div>
    {/* <Router> */}
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    <UserContext.Provider value={'hello context'}>
      <Routes>
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/about' element={<About />} />
      </Routes>
    </UserContext.Provider>
      </>
  );
}
