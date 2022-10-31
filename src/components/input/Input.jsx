import React from 'react'
import "./Input.css"

const Input = ({ type, placeholder, onChange }) => {
  return (
    <div>
      <input 
      type="text" 
      className="input" 
      type={type} 
      placeholder={placeholder} 
      onChange={onChange}/>
    </div>
  )
}

export default Input
