import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../logo.png';

const CustomForm = ({ altLink, formTitle, forWho, altLinkText, children }) => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='w-full md:w-1/2 border rounded-md flex flex-col px-4 py-6'>
        <div className='grid place-items-center pb-8'>
          <Link to={'/'}>
            <img src={LOGO} alt='' className='w-24 h-w-24' />
          </Link>
        </div>
        <div className='flex items-center justify-between border-b pb-2'>
          <h3 className='text-2xl font-bold'>
            {formTitle} <span className='text-sm'>for {forWho}</span>
          </h3>
          <Link to={altLink}>
            <p className='text-sm text-[#1E38C1] underline'>{altLinkText}</p>
          </Link>
        </div>
        <form className='flex flex-col gap-5 mt-5'>{children}</form>
      </div>
    </div>
  );
};

export default CustomForm;
