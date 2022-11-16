import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Radios: FC<Props> = props => {
  const { children } = props;

  return (
    <div className="container flex justify-end gap-5 md:col-span-3  md:h-full md:flex-col md:items-start md:justify-end md:gap-0">
      {children}
    </div>
  );
};

export default Radios;
