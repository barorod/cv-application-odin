import { useState } from 'react';

const FormWrapper = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='mb-6 border border-gray-200 rounded-md overflow-hidden'>
      <div
        className='bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 shift-colors'
        onClick={() => setIsOpen(!isOpen)}>
        <h2 className='font-semibold text-lg text-gray-700'>{title}</h2>
        <span
          className='text-gray-500 shift-transform duration-200'
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}>
          ▲
        </span>
      </div>

      {isOpen && <div className='p-4 border-t border-gray-200'>{children}</div>}
    </div>
  );
};

export default FormWrapper;
