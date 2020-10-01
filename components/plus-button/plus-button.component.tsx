import React from 'react';

export interface IPlusButtonProps {
  onClick: any;
}

const PlusButton: React.FC<IPlusButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-gray-200 text-gray-700 p-2 flex items-center justify-center hover:bg-gray-300"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
      </svg>
    </button>
  );
};

export default PlusButton;
