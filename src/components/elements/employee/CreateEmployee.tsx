import React, { FC } from 'react';

import {
  Input,
  RadioInput,
  Radios,
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
  firstname: 'Tom',
  lastname: 'Gr',
  email: 'tom.gr@test.com',
  salary: 1300,
  createAt: new Date().toLocaleDateString('ja-JP').replaceAll('/', '-').toString()
};

type Props = {
  onSuccess: () => void;
};

const CreateEmployee: FC<Props> = props => {
  const { onSuccess } = props;

  const handleSubmit = (data: TEmployee) => {
    console.log(data);
    if (data) onSuccess();
  };

  return (
    <SmartForm<TEmployee> options={{ defaultValues }} onSubmit={handleSubmit}>
      <Input name="firstname" label="Firstname" type="text" />
      <Input name="lastname" label="Lastname" type="text" />
      <Input name="email" label="Email" type="email" />
      <Input name="salary" label="Salary" type="number" />
      <Input name="createAt" label="" type="date" />
      <Radios>
        {radioStatus.map(status => (
          <RadioInput
            key={status.id}
            name="status"
            value={status.value}
            id={status.id}
            classRadio={status.classRadio}
          />
        ))}
      </Radios>
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
