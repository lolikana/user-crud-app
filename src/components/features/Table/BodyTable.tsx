import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BodyTable: FC<Props> = props => {
  const { children } = props;
  return <tbody>{children}</tbody>;
};

export default BodyTable;
