import React, { FC } from 'react';

type Props = {
  message: string;
  onClick: () => void;
};

const OnSuccessMsg: FC<Props> = props => {
  const { message, onClick } = props;

  return (
    <div className="success container mx-auto">
      <div
        onClick={() => onClick()}
        className="text-md mx-auto my-4 flex w-3/6 justify-center border border-yellow-200 bg-yellow-400 bg-opacity-5 py-2 text-center text-gray-900"
      >
        {message}
      </div>
    </div>
  );
};

export default OnSuccessMsg;
