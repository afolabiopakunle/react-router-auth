import React from "react";
import "./style.css";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

export default function App() {
  return (
    <>
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      </>
  );
}
