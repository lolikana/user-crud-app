import React, { FC } from 'react';

type Props = {
  message: string;
  onClick: () => void;
};

const OnErrorMsg: FC<Props> = props => {
  const { message, onClick } = props;

  return (
    <div className="success container mx-auto">
      <div
        onClick={() => onClick()}
        className="text-md mx-auto my-4 flex w-3/6 justify-center border border-red-200 bg-yellow-400 bg-opacity-5 py-2 text-center text-gray-900"
      >
        {message}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            width="25"
            viewBox="0 0 45 45"
            fill="red"
            className="ml-1 self-baseline"
          >
            <path d="M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default OnErrorMsg;
