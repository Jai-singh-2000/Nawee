import React from 'react';

const Card = ({img,title,desc,phone,color="#FFC35F"}) => {
  return (
    <div className="card">
      
      <div className="card-icon">
        <img src={img} alt="" />
      </div>

      <div className="card-content">
        <h2>{title}</h2>
        <h6>{desc}</h6>
        <h3 style={{color:color}}>{phone}</h3>
      </div>
    
    </div>
  );
}

export default Card