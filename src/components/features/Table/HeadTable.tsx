import React, { FC } from 'react';

type Props = {
  colTitle: any;
};

const HeadTable: FC<Props> = props => {
  const { colTitle } = props;
  return (
    <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {Object.keys(colTitle).map((key, index) => (
          <th key={index} scope="col" className="py-3 px-6">
            {colTitle[key]}
          </th>
        ))}
        <th scope="col" className="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default HeadTable;
