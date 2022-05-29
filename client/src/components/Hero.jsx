import React, { useState, useEffect } from 'react';
import TEACHING from '../../teaching.svg';
import LEARNING from '../../learning.svg';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      {/* Content */}
      <div className='flex-1 grid place-items-center text-gray-600'>
        <p className='p-8 text-3xl md:text-6xl font-bold leading-loose'>
          Gain expert skills <br />
          From experts <br />
        </p>
      </div>
      {/* IMAGES */}
      <div className='flex flex-col-reverse flex-1 items-center '>
        <div className='flex-1'>
          <img className='hero-img' src={TEACHING} alt='' />
        </div>
        <div className='flex-1'>
          <img className='hero-img' src={LEARNING} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
