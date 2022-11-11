import React from 'react';

import { TInput } from './types/types';

const Input = ({ register, name, label, type }: TInput) => {
  return (
    <div className="container md:col-span-3">
      <div className="input-type flex flex-col gap-1">
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          type={type}
          {...register}
          className="focus:outline-node w-full rounded-md border border-indigo-600 px-4 py-1"
        />
      </div>
    </div>
  );
};

export default Input;
