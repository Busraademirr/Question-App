import React from 'react'
import './Introduce.css'
import { Link } from 'react-router-dom'

function Introduce() {
  return (
    <div className='main'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur totam odit dolorum harum, modi soluta. Vero, sequi ipsa! Accusantium, unde. Accusantium enim explicabo adipisci tempore esse ab fuga dignissimos dolorum.</p>
      
      <button className='btn' id="start">
        <Link to="/Quiz"> TESTE BAŞLA</Link></button>
    </div>
  )
}

export default Introduce