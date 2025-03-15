const Input = ({ label, ...props }) => {
  return (
    <div className='mb-4'>
      <label
        className='block text-gray-700 font-medium mb-1'
        htmlFor={props.id}>
        {label}:
      </label>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        {...props}
      />
    </div>
  );
};

export default Input;
