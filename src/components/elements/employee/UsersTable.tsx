import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

import { BodyTable, HeadTable, Table } from '@/components/features/Table';
import { getUsers } from '@/lib/helper';

const userTitle = {
  col_1: 'Name',
  col_2: 'Phone',
  col_3: 'Email',
  col_4: 'Created On',
  col_5: 'Role',
  col_6: 'Status'
};

// const usersInfos = [
//   {
//     id: 1,
//     name: 'Tom Gr',
//     phone: '000-0000-0000',
//     email: 'tom.gr@maeda-g.co.jp',
//     role: 'Admin',
//     createdOn: '2022-11-11',
//     status: 'Active'
//   },
//   {
//     id: 2,
//     name: 'Tom Gr',
//     phone: '000-0000-0000',
//     email: 'tom.gr@maeda-g.co.jp',
//     role: 'Admin',
//     createdOn: '2022-11-11',
//     status: 'Active'
//   },
//   {
//     id: 3,
//     name: 'Tom Gr',
//     phone: '000-0000-0000',
//     email: 'tom.gr@maeda-g.co.jp',
//     role: 'Admin',
//     createdOn: '2022-11-11',
//     status: 'Active'
//   }
// ];

const UsersTable = () => {
  // const { isLoading, isError, data, error } = useQuery(['users'], getUsers);
  const { isLoading, data } = useQuery(['users'], getUsers);

  function random() {
    Math.floor(Math.random() * 20);
  }

  if (isLoading) return <div>Employee is loading</div>;
  // if (isError) return <div>Got error : {error}</div>;

  return (
    <Table>
      <HeadTable colTitle={userTitle} />
      <BodyTable>
        {data.map((datas: any) => (
          <tr
            key={datas._id}
            className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
          >
            <th
              scope="row"
              className="flex items-center gap-2 whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              <Image
                src={`https://robohash.org/${random()}`}
                width={60}
                height={60}
                alt=""
              />
              <span>{datas.name}</span>
            </th>
            <td className="py-4 px-6">
              <span>{datas.phone}</span>
            </td>
            <td className="py-4 px-6">
              <span>{datas.email}</span>
            </td>
            <td className="py-4 px-6">
              <span>{datas.createdOn}</span>
            </td>
            <td className="py-4 px-6">
              <span>{datas.role}</span>
            </td>
            <td className="py-4 px-6">
              <span
                className={`${
                  datas.status === 'Activate' ? 'bg-green-500' : 'bg-red-500'
                } rounded-full py-1 px-2 text-black`}
              >
                {datas.status}
              </span>
            </td>
            <td className="py-4 px-6">
              <span className="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500">
                Edit
              </span>{' '}
              /{' '}
              <span className="cursor-pointer font-medium text-red-600 hover:underline dark:text-red-500">
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
