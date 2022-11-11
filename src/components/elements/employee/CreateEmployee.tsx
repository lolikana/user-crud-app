import React, { ChangeEvent, useState } from 'react';

import {
  Input,
  Radio,
  RadioInput,
  SmartForm,
  TRadio
} from '@/components/features/SmartForm';

import { TEmployee } from './types/types';

const radioStatus: Omit<TRadio, 'name'>[] = [
  {
    value: 'Active',
    id: 'radioDefault1',
    classRadio: 'border-green-500 checked:bg-green-500'
  },
  {
    value: 'Pending',
    id: 'radioDefault2',
    classRadio: 'border-orange-500 checked:bg-orange-500'
  }
];

const defaultValues = {
  // createDate: new Date().toLocaleDateString('ja-JP').replaceAll('/', '-').toString()
};

const CreateEmployee = () => {
  const [status, setStatus] = useState<string>('');

  const toggleStatus = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (data: TEmployee) => {
    console.log(Object.keys(data).length === 0);
    const datas = { ...data, status };
    if (Object.keys(datas).length === 0) console.log('no datas');
    console.log(data);
  };

  return (
    <SmartForm<TEmployee> options={{ defaultValues }} onSubmit={handleSubmit}>
      <Input name="firstname" label="Firstname" type="text" />
      <Input name="lastname" label="Lastname" type="text" />
      <Input name="email" label="Email" type="email" />
      <Input name="salary" label="Salary" type="number" />
      <Input name="createDate" label="" type="date" />
      <Radio>
        {radioStatus.map(status => (
          <RadioInput
            onChange={toggleStatus}
            key={status.id}
            name="status"
            value={status.value}
            id={status.id}
            classRadio={status.classRadio}
          />
        ))}
      </Radio>
      <button
        defaultValue="Add"
        className="mx-auto flex w-full cursor-pointer justify-center gap-1 rounded-md border bg-green-500 py-2 px-4 text-white hover:border-green-500 hover:bg-gray-50 hover:text-gray-800 md:col-span-6 lg:col-start-4 lg:row-end-4"
      >
        Add
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 45 45"
          fill="currentColor"
          className="self-baseline"
        >
          <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
        </svg>
      </button>
    </SmartForm>
  );
};

export default CreateEmployee;
