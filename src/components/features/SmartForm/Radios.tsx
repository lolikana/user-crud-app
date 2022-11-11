import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Radios: FC<Props> = props => {
  const { children } = props;

  return (
    <div className="container flex items-end gap-5 md:col-span-3 md:block">
      {children}
    </div>
  );
};

export default Radios;
