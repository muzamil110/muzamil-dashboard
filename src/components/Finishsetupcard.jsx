// src/components/Card.jsx
import React from 'react';

const Finishsetupcard = (props) => {
  return (
    <div className="card bg-base-100 h-20 w-full pb-6">
    <h2 className="card-title p-2">Finish setting up your account</h2>
    <div class="flex">
        <div class="flex-1 text-gray-700 text-center px-4 mypy-2 m-2">
        <div className="radial-progress" style={{"--value":20}} role="progressbar">20%</div>
        <h2 className='my-font'>Setup Progress</h2>
        <p>Dummy text used in laying out print</p>
        </div>
        <div class="flex-1 text-gray-700 text-center px-4 mypy-2 m-2 border rounded">
        <input type="file" className="file-input file-input-ghost w-full max-w-xs" />
        <h2 className='my-font'>Upload your company logo</h2>
        <p>The logo must be rectangle in Jpg, Png, Svg and WebP file format under 1MB.</p>
        </div>
        <div class="flex-1 text-gray-700 text-center px-4 mypy-2 m-2 border rounded">
        <div><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#F47272" fill-opacity="0.2"/>
        <path d="M34.875 26.0208V21.3333C34.875 20.1827 33.9423 19.25 32.7917 19.25H18.2083C17.0577 19.25 16.125 20.1827 16.125 21.3333V30.7083C16.125 31.859 17.0577 32.7917 18.2083 32.7917H26.5417" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.2708 28.625V31.2292M32.2708 31.2292V33.8333M32.2708 31.2292H29.6667M32.2708 31.2292H34.875" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.125 23.4167H34.3542" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.2917 28.625H22.375" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <h2 className='my-font'>Add funds to your wallet</h2>
        <p className='pb-4'>The placeholder text, beginning with the line Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#my_modal_8" className="flex">Add funds <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M4.42859 11.0716L11.5714 3.92871" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.76785 3.92871H11.5714V9.73228" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
        </div>
        <div class="flex-1 text-gray-700 text-center px-4 mypy-2 m-2 border rounded">
        <div><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#F47272" fill-opacity="0.2"/>
        <path d="M29.1667 34.375V32.2917C29.1667 31.1866 28.7277 30.1268 27.9463 29.3454C27.1649 28.564 26.1051 28.125 25 28.125H17.7084C16.6033 28.125 15.5435 28.564 14.7621 29.3454C13.9807 30.1268 13.5417 31.1866 13.5417 32.2917V34.375" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.3333 20.8333V27.0833" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36.4583 23.9583H30.2083" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.3542 23.9583C23.6554 23.9583 25.5208 22.0929 25.5208 19.7917C25.5208 17.4905 23.6554 15.625 21.3542 15.625C19.053 15.625 17.1875 17.4905 17.1875 19.7917C17.1875 22.0929 19.053 23.9583 21.3542 23.9583Z" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <h2 className='my-font'>Add your team members</h2>
        <p className='pb-4'>The placeholder text, beginning with the line Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#my_modal_8" className="flex">Add members <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M4.42859 11.0716L11.5714 3.92871" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.76785 3.92871H11.5714V9.73228" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
        </div>
        <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add</h3>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" value="password" />
            </label>
            <div className="modal-action">
            <a href="#" className="btn">Yay!</a>
            </div>
        </div>
        </div>
        </div>
        
    </div>
  );
};

export default Finishsetupcard;
