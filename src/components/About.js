import React, {useContext} from 'react';
import UserContext from '../authentications/UserContext'
import { Routes, Route, Link } from 'react-router-dom';

export default function About() {
  const msg = useContext(UserContext)
  return (
    <>
    <h1>About Page</h1>
    <p>{msg}</p>
    </>
  )
}