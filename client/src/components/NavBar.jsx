import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../logo.png';

const NavBar = ({ primaryButton, secondaryButton, mainLinks, to }) => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between px-7 py-6'>
      {/* LOGO */}
      <Link to={'/'}>
        <div className='flex items-center gap-3 cursor-pointer'>
          <img src={LOGO} className='w-10 h-10 ' title='Cuvette Mern App' />
          {to && (
            <>
              <span>for</span>
              <h2 className='tracking-wide'>{to}</h2>
            </>
          )}
        </div>
      </Link>
      <div
        className={`flex items-center ml-7  flex-1 ${
          mainLinks ? 'justify-between' : 'justify-end'
        }`}
      >
        {mainLinks ? (
          <ul className='flex gap-6'>
            {mainLinks.map((mainLink) => (
              <Link to={mainLink.slug} key={mainLink.slug}>
                <li className='cursor-pointer text-[#1E38C1] hover:border-b-2 border-[#1E38C1] '>
                  {mainLink.label}
                </li>
              </Link>
            ))}
          </ul>
        ) : null}
        <ul className='flex gap-6'>
          <Link to={primaryButton.slug}>
            <li className='nav-link'>{primaryButton.label}</li>
          </Link>
          <Link to={secondaryButton.slug}>
            <li className='nav-link bg-[#1E38C1] text-white border-none'>
              {secondaryButton.label}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
