import React from 'react';

function Dummy() {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  return (
    <div className="card bg-base-100 text-center shadow-xl" style={cardStyle}>
      <div className="card-body">
        <h2 className="card-title">This is the dummy component, but the structure seems incorrect.</h2>
        <h2 className="card-title">The correct structure should have folders named: src/components and src/pages.</h2>
        <h2 className="card-title">In the 'pages' folder, there should be pages like home, login, and other pages.</h2>
        <h2 className="card-title">In the 'components' folder, there should be reusable components used across the project.</h2>
      </div>
    </div>
  );
}

export default Dummy;
