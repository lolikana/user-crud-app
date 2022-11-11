import React from 'react';
import { useFormContext } from 'react-hook-form';

import { TInput } from './types/types';

const Input = ({ name, label, type }: TInput) => {
  const { register } = useFormContext();

  return (
    <div className="container md:col-span-3">
      <div className="input-type flex flex-col gap-1">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          {...register(name)}
          className="focus:outline-node w-full rounded-md border border-indigo-600 px-4 py-1"
        />
      </div>
    </div>
  );
};

export default Input;
