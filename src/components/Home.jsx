import React from 'react';
import Navbar from './Navbar';
import Sidebar  from './Sidebar';
import Regularcard from './Regularcard';
import Smallcard from './Smallcard';
import BarChart from './Analyticard';
import Calendercard from './Calendercard';
import Eventcard from './Eventcard';
import Campaigncard from './Campaigncard';
import Finishsetupcard from './Finishsetupcard';

const Home = () => {
 


  const regularcardarray = [
    { title: 'Brand Store', img: 'https://blinkswag.com/wp-content/uploads/2023/07/about-3.webp'},
    { title: 'Order a Custom Swag', img: 'https://blinkswag.com/wp-content/uploads/2023/07/new-banner.webp'},
    { title: 'Create a Campaign', img: 'https://blinkswag.com/wp-content/uploads/2023/07/fullfilment-768x495.webp'},
    { title: 'Send a Gift', img: 'https://blinkswag.com/wp-content/uploads/2024/01/home_-1.webp'},
    { title: 'Send a Reward', img: 'https://blinkswag.com/wp-content/uploads/2023/07/swaggg.webp'},
  ];

  return (
    <>
    <div class="flex">
    <div class="p-4 border-r-2">
  <Sidebar />
  </div>
  <div class="flex-1 w-full ... bg-slate-50">
  <Navbar />

 <div className='wrapper-flex w-full p-4'>
 <h2 className="text-left p-4 text-regular">Hi, <strong>Company Name</strong></h2>
  <div className='py-6 rounded bg-white'>
  <h2 className="text-start p-4 font-inter font-medium text-regular">What do you want to do today!</h2>
  <div class="flex rounded bg-white gap-5 item-center justify-center">
{
  regularcardarray.map((card) =>
    <Regularcard title={card.title} img={card.img} />
  )
}


  </div>
  </div>
  <div class="flex py-6 gap-5">
  <Smallcard title="Total Spent" ammount="$0.00" description="$0.00 new in this month"/>
  <Smallcard title="Total Orders" ammount="$0.00" description="$0.00 new in this month"/>
  <Smallcard title="Pending Orders" ammount="$0.00" description="$0.00 new in this month"/>
  <Smallcard title="Total Recipients" ammount="$0.00" description="$0.00 new in this month"/>
  </div>
  <div class="flex py-6">
  <BarChart />
  <Calendercard />
  <Eventcard />
  </div>
  <div class="py-6">
  <Campaigncard />
  </div>
  <div class="py-6">
  <Finishsetupcard />
  </div>
  </div>
  </div>
  </div>

    </>
  )
}

export default Home
