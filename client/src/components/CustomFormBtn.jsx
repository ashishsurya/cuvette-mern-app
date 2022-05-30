import React, { useState, useEffect } from 'react';
import RIGHTARROW from '../../rightarrow.svg';
const CustomFormBtn = ({ label, onClick }) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      className='flex items-center justify-center hover:bg-[#1E38C1] bg-[#142683] py-2 pr-5 pl-4 text-white font-bold rounded-md gap-2 hover:gap-3'
    >
      <p>{label}</p>
      <img src={RIGHTARROW} alt='' className='w-5 h-5 !text-white' />
    </button>
  );
};

export default CustomFormBtn;
