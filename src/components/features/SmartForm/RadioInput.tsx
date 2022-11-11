import React from 'react';

import { TRadio } from './types/types';

const RadioInput = ({ register, value, name, classRadio, id, onChange }: TRadio) => {
  return (
    <div className="flex">
      <input
        onChange={onChange}
        name={name}
        value={value}
        type="radio"
        id={id}
        {...register}
        className={`float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none ${classRadio}`}
        required
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default RadioInput;
