const CvOutput = ({ formData }) => {
  return (
    <div className='font-serif'>
      <h1 className='text-3xl font-bold text-gray-800 border-b pb-2'>
        {formData.general.name}
      </h1>
      <p className='text-gray-600 mt-2 flex gap-3 items-center'>
        <span>{formData.general.email}</span>
        <span className='text-gray-400'>|</span>
        <span>{formData.general.phone}</span>
      </p>

      <h2 className='text-xl font-bold mt-6 text-gray-800 border-b pb-1'>
        Education
      </h2>
      {formData.education.map((edu, index) => (
        <div key={index} className='mt-3 pl-2 border-l-2 border-gray-200'>
          <p className='font-semibold text-gray-800'>{edu.school}</p>
          <p className='text-gray-700'>{edu.study}</p>
          <p className='text-sm text-gray-500'>{edu.date}</p>
        </div>
      ))}

      <h2 className='text-xl font-bold mt-6 text-gray-800 border-b pb-1'>
        Experience
      </h2>
      {formData.experience.map((exp, index) => (
        <div key={index} className='mt-3 pl-2 border-l-2 border-gray-200'>
          <p className='font-semibold text-gray-800'>{exp.title}</p>
          <p className='text-gray-700'>{exp.location}</p>
          <p className='text-sm text-gray-500'>
            {exp.start} to {exp.end}
          </p>
          <p className='mt-1 text-gray-600'>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CvOutput;
