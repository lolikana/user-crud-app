import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { FC } from 'react';

import { BodyTable, HeadTable, Table } from '@/components/features/Table';
import { deleteUser, getUsers } from '@/lib/helper';

import { TEmployee } from './types/types';

type Props = {
  showEditForm: (datas: TEmployee) => void;
};

const userTitle = {
  col_1: 'Name',
  col_2: 'Phone',
  col_3: 'Email',
  col_4: 'Created On',
  col_5: 'Role',
  col_6: 'Status'
};

const UsersTable: FC<Props> = props => {
  const { showEditForm } = props;
  const { isLoading, isError, data, error } = useQuery(['users'], getUsers);

  if (isLoading)
    return <div className="mt-5 h-full text-white">Employees are loading</div>;
  if (isError)
    return (
      <>
        <div className="mt-5 h-full text-white">Got error :</div>
        {error}
      </>
    );

  return (
    <Table>
      <HeadTable colTitle={userTitle} />
      <BodyTable>
        {data.map((datas: TEmployee) => (
          <tr
            key={datas._id}
            className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
          >
            <th
              scope="row"
              className="flex items-center gap-2 whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              <Image src={datas.avatar} width={60} height={60} alt="" />
              <span>
                {datas.firstname} {datas.lastname.toUpperCase()}
              </span>
            </th>
            <td className="py-4 px-6">
              <span>{datas.phone}</span>
            </td>
            <td className="py-4 px-6">
              <span>{datas.email}</span>
            </td>
            <td className="py-4 px-6">
              <span>{datas.createdOn.slice(0, 10)}</span>
            </td>
            <td className="py-4 px-6">
              <span>{datas.role}</span>
            </td>
            <td className="py-4 px-6">
              <span
                className={`${
                  datas.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                } inline-block w-full rounded-full py-1 px-2 text-center text-black`}
              >
                {datas.status}
              </span>
            </td>
            <td className="py-4 px-6">
              <span
                onClick={() => showEditForm(datas)}
                className="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </span>{' '}
              /{' '}
              <span
                className="cursor-pointer font-medium text-red-600 hover:underline dark:text-red-500"
                onClick={() => deleteUser(datas._id)}
              >
                Delete
              </span>
            </td>
          </tr>
        ))}
      </BodyTable>
    </Table>
  );
};

export default UsersTable;
