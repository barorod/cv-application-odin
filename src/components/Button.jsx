import React from 'react';

const Button = ({ onClick, text, title }) => {
  return (
    <>
      <button
        type='button'
        className={`${
          text === 'Remove' ? 'bg-red-500' : 'bg-blue-500'
        } text-white px-3 py-1 rounded mt-2 cursor-pointer`}
        onClick={onClick}>
        {`${text} ${title}`}
      </button>
    </>
  );
};

export default Button;
