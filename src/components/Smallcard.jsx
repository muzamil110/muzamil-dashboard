import React from 'react';

const Smallcard = (props) => {
    return (

<div className="card w-25 bg-base-100 p-2">
  <div className="card-body">
  <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <h4 className="card-title">{props.title}</h4>
    <div className="card-actions justify-start">
      <h2 className="card-title">{props.ammount}</h2>
    </div>
    <div className="card-actions">
    <p className="text-start">{props.description}</p>
        </div>
  </div>
</div>
   );
};
  

export default Smallcard;