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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          width="25"
          viewBox="0 0 45 45"
          fill="green"
          className="ml-1 self-center"
        >
          <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
        </svg>
      </div>
    </div>
  );
};

export default OnSuccessMsg;
