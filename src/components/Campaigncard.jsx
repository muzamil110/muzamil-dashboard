// src/components/Card.jsx
import React from 'react';

const Campaigncard = (props) => {
  return (
    <div className="card bg-base-100 p-2 h-20 w-full">
          <h2 className="card-title p-2">My Campaigns</h2>
      <div className="card-body items-center text-start">
        <div className="text-center">
        <figure className="p-2">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#F47272" fill-opacity="0.2"/>
<path d="M27.1875 24.375V38.8733C27.1875 39.0276 27.1494 39.1796 27.0766 39.3156C27.0037 39.4517 26.8984 39.5677 26.77 39.6533L25.4819 40.5121C25.3569 40.5954 25.2137 40.6475 25.0644 40.6639C24.915 40.6803 24.7639 40.6606 24.6238 40.6065C24.4837 40.5523 24.3586 40.4652 24.2592 40.3526C24.1597 40.24 24.0888 40.1052 24.0524 39.9594L22.5 33.75" stroke="#220024" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 33.7499C21.2568 33.7499 20.0645 33.2561 19.1854 32.377C18.3064 31.4979 17.8125 30.3057 17.8125 29.0624C17.8125 27.8192 18.3064 26.627 19.1854 25.7479C20.0645 24.8688 21.2568 24.3749 22.5 24.3749H27.1875C27.1875 24.3749 33.5686 24.3749 39.7091 19.2248C39.8457 19.1099 40.0122 19.0363 40.1892 19.0128C40.3661 18.9893 40.5461 19.0168 40.7079 19.0921C40.8698 19.1673 41.0068 19.2873 41.1028 19.4377C41.1988 19.5882 41.2499 19.763 41.25 19.9415V38.1834C41.2499 38.3619 41.1988 38.5367 41.1028 38.6872C41.0068 38.8376 40.8698 38.9576 40.7079 39.0328C40.5461 39.1081 40.3661 39.1356 40.1892 39.1121C40.0122 39.0886 39.8457 39.015 39.7091 38.9001C33.5686 33.7499 27.1875 33.7499 27.1875 33.7499H22.5Z" stroke="#220024" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </figure>
      <div className="text-center mb-2"><h1 className="my-font">No scheduled campaign</h1>
      <p>The purpose of lorem ipsum is to create a natural</p>
      </div>
  
      <button className="btn add-fund-btn ">+ Create Campaign</button>
        </div>
      </div>
    </div>
  );
};

export default Campaigncard;
