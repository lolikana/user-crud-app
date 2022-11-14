import React from 'react';

import { HeadTable, Table } from '@/components/features/Table';
import BodyTable from '@/components/features/Table/BodyTable';

const userTitle = {
  col_1: 'Name',
  col_2: 'Phone',
  col_3: 'Email',
  col_4: 'Role',
  col_5: 'Created　On',
  col_6: 'Status'
};
const usersInfos = [
  {
    user1: {
      name: 'Tom Gr',
      phone: '000-0000-0000',
      email: 'tom.gr@maeda-g.co.jp',
      role: 'Admin',
      createdOn: '2022-11-11',
      status: 'Active'
    }
  },
  {
    user2: {
      name: 'Tom Gr',
      phone: '000-0000-0000',
      email: 'tom.gr@maeda-g.co.jp',
      role: 'Admin',
      createdOn: '2022-11-11',
      status: 'Active'
    }
  }
];

const UsersTable = () => {
  return (
    <Table>
      <HeadTable colTitle={userTitle} />
      <BodyTable rowsInfos={usersInfos} />
    </Table>
  );
};

export default UsersTable;
