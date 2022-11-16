import React, { FC } from 'react';

import {
  Input,
  RadioInput,
  Radios,
  SmartForm,
  TRadio
} from '@/components/features/SmartForm';
import { postUser, randomNumber } from '@/lib/helper';

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
  createdOn: new Date().toLocaleDateString('ja-JP').replaceAll('/', '-').toString()
};

export type toggleMsg = {
  onSuccessMsg: () => void;
  onErrorMsg: () => void;
};

const AddUserForm: FC<toggleMsg> = props => {
  const { onSuccessMsg, onErrorMsg } = props;

  const handleSubmit = (data: TEmployee) => {
    console.log(data);
    if (data.status === null) return onErrorMsg();
    if (data) {
      postUser(data);
      return onSuccessMsg();
    }
  };

  // random avatar
  const valueImg = () => {
    const value = `https://robohash.org/${randomNumber()}`;
    return value;
  };

  return (
    <SmartForm<TEmployee> options={{ defaultValues }} onSubmit={handleSubmit}>
      <Input name="firstname" label="Firstname" type="text" />
      <Input name="lastname" label="Lastname" type="text" />
      <Input name="email" label="Email" type="email" />
      <Input name="phone" label="Phone" type="phone" />
      <Input name="createdOn" label="Date" type="date" />
      <Input name="role" label="Role" type="text" />
      <Input name="avatar" label="Avatar" type="text" value={valueImg()} />
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

export default AddUserForm;
