import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Table: FC<Props> = props => {
  const { children } = props;

  return (
    <div className="relative mt-5 overflow-x-auto shadow-[0_2px_8px_0_rgba(200,200,200,0.5)] sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        {children}
      </table>
    </div>
  );
};

export default Table;
