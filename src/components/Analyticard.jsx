import React from 'react';
import Chart from 'chart.js/auto';
const Card = () => {
  return (
  
  <div className="card lg:card-side bg-base-100 shadow-xl flex">
  <div className="card-body">
  <h2 className="card-title">Analytics</h2>
  <div role="tablist" className="tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 1" />
  <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 2" checked />
  <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 3" />
  <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 4" />
  <div role="tabpanel" className="tab-content p-10">Tab content 4</div>
    </div>
    <figure><img src="https://plotly.github.io/static/images/histogram-with-excel/image20.png" alt="Album"/></figure>
  </div>

</div>

  );
};

export default Card;