import React from 'react'
import Navbar from '../components/Navbar';

const Usuarios = () => {  
  console.log('window', window.location.pathname);
  
  return (
    <div> 
      <Navbar />
    </div>
  )
}

export default Usuarios;