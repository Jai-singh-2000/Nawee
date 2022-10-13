import React from 'react'
import "./Button.css";

const Button = ({name,color="#FA8832"}) => {
  return (
    <button className='simpleButton' style={{color:color}}>
        {name}
    </button>
  )
}

export default Button;