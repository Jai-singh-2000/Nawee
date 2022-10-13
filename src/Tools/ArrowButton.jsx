import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import "./Button.css";

const ArrowButton = ({name,color,border}) => {
  return (
    <>
        <button className='arrowButton' style={{color:color,border:border}}>
            {name}
        </button>
        <BsChevronDown style={{padding:".2rem 0"}}/>
    </>
  )
}

export default ArrowButton;


