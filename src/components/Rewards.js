import React, { useContext } from 'react';
import UserContext from '../authentications/UserContext';

export default function Rewards() {
  const msg = useContext(UserContext)
  return (
    <>
    <h1>Rewards Page</h1>
    <p>{msg}</p>
    </>
  )
}