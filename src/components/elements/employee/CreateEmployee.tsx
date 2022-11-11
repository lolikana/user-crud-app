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
  createDate: new Date().toLocaleDateString('ja-JP').replaceAll('/', '-').toString()
};

const CreateEmployee = () => {
  const [status, setStatus] = useState('');

  const toggleStatus = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (data: TEmployee) => {
    const datas = { ...data, status };
    console.log(datas);
  };

  return (
    <SmartForm<TEmployee>
      options={{ defaultValues }}
      onSubmit={handleSubmit}
      submitBtn="Add"
    >
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
    </SmartForm>
  );
};

export default CreateEmployee;
