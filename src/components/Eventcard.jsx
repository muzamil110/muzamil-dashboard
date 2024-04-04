import React from 'react';

const Eventcard = () => {
    
  return (
  
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Upcoming Events</h2>
    
    <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
  <div className="card w-96 bg-base-100 shadow-xl">
  <div className="text-left mt-6">
    <p>Jan 23, 2024</p>
    <h2 className="card-title">International Holocaust Remembrance Day</h2>
    <div className="card-actions">
      <button className="btn add-fund-btn">+ Create Campaign</button>
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
  </div>
</div>
  </div>
</div>

  );
};

export default Eventcard;