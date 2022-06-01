import React, { useState, useEffect } from 'react';

const CustomInput = ({ id,value, setValue, label, placeHolder,type }) => {
  return (
    <div className='flex flex-1 flex-col items-start my-3 gap-2'>
      <label htmlFor={id} className="text-base text-gray-700">{label}</label>
      <input
        required
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full py-3 px-[10px] border rounded"
      />
    </div>
  );
};

export default CustomInput;
