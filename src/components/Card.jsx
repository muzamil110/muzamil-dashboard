import React from 'react';

const StylishCard = () => {
    return (
        <ul className="menu bg-base-100 rounded-box border border-gray-200">
            <li>
                <a className='font-semibold'>
                   Company name
                  
                </a>
            
            </li>
            <li>
                <a className='light-purple'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.66669 13.3333V12.6667C2.66669 10.8257 4.15907 9.33333 6.00002 9.33333H8.50002M11.6904 9.30967V11.6667M11.6904 11.6667V14.0237M11.6904 11.6667H14.0474M11.6904 11.6667H9.33335M10 4.66667C10 6.13943 8.80609 7.33333 7.33335 7.33333C5.86059 7.33333 4.66669 6.13943 4.66669 4.66667C4.66669 3.19391 5.86059 2 7.33335 2C8.80609 2 10 3.19391 10 4.66667Z" stroke="#220024" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    Invite
                </a>
            </li>
        </ul>
    );
  };
  

export default StylishCard;