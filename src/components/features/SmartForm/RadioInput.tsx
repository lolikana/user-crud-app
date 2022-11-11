import React from 'react';
import { useFormContext } from 'react-hook-form';

import { TRadio } from './types/types';

const RadioInput = ({ value, name, classRadio, id }: TRadio) => {
  const { register } = useFormContext();

  return (
    <div className="flex">
      <input
        value={value}
        type="radio"
        id={id}
        {...register(name)}
        className={`float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none ${classRadio}`}
        required
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default RadioInput;
