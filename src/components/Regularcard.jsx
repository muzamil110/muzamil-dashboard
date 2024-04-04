// src/components/Card.jsx
import React from 'react';

const Card = (props) => {
  return (
    
    <div className="card w-96 bg-base-100 border p-2 h-20">
      <figure className="p-2">
        <img
          src={props.img}
          alt="Shoes"
          className="rounded-xl max-w-xs"
        />
      </figure>
      <div className="card-body items-start text-start">
        <h2 className="card-title text-regular">{props.title}</h2>
        <div className="card-actions">
            <a className="flex text-aref">Try it now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M4.42859 11.0716L11.5714 3.92871" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.76785 3.92871H11.5714V9.73228" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
