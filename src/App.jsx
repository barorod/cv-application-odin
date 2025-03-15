import { useState } from 'react';
import FormWrapper from './components/FormWrapper';
import Input from './components/Input';
import { fields } from './constants';
import CvOutput from './components/CvOutput';
import Button from './components/Button';

function App() {
  const [formData, setFormData] = useState({
    general: {
      name: '',
      email: '',
      phone: '',
    },
    education: [
      {
        id: Date.now(),
        school: '',
        study: '',
        date: '',
      },
    ],
    experience: [
      {
        id: Date.now(),
        title: '',
        location: '',
        description: '',
        start: '',
        end: '',
      },
    ],
  });

  const handleInputChange = (section, idx, name, value) => {
    if (section === 'general') {
      setFormData((oldFormData) => ({
        ...oldFormData,
        general: { ...oldFormData.general, [name]: value },
      }));
    } else {
      setFormData((oldFormData) => {
        const updatedArray = [...oldFormData[section]];
        updatedArray[idx] = { ...updatedArray[idx], [name]: value };
        return { ...oldFormData, [section]: updatedArray };
      });
    }
  };

  const addEntry = (section) => {
    const newEntry = {};
    fields[section].forEach((field) => {
      newEntry[field.name] = '';
    });
    newEntry.id = Date.now();
    setFormData((oldFormData) => ({
      ...oldFormData,
      [section]: [...oldFormData[section], newEntry],
    }));
  };

  const removeEntry = (section, id) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [section]: oldFormData[section].filter((item) => item.id !== id),
    }));
  };

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = `${formData.general.name} - CV`;
    window.print();
    document.title = originalTitle;
  };

  return (
    <div className='w-full min-h-screen bg-gray-100 flex flex-col items-center py-8 print:p-0 print:bg-white'>
      <header className='mb-8 flex items-center gap-4 print:hidden'>
        <h1 className='text-3xl font-bold text-gray-800'>CV Application</h1>
        <button
          onClick={handlePrint}
          className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700'>
          Print CV
        </button>
      </header>
      <div className='flex flex-col md:flex-row w-full max-w-5xl gap-6 px-4 print:p-0 print:max-w-none'>
        <div className='w-full flex-1 bg-white rounded-lg shadow-md overflow-hidden px-4 print:hidden'>
          <FormWrapper title='General Information'>
            {fields.general.map((field) => (
              <Input
                label={field.label}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                key={field.name}
                type={field.type}
                value={formData.general[field.name] || ''}
                onChange={(e) =>
                  handleInputChange('general', null, field.name, e.target.value)
                }
              />
            ))}
          </FormWrapper>
          <FormWrapper title='Education'>
            {formData.education.map((edu, idx) => (
              <div key={edu.id} className='border-b pb-4 mb-4'>
                {fields.education.map((field) => (
                  <Input
                    label={field.label}
                    name={field.name}
                    id={`${field.name}-${idx}`}
                    key={`${field.name}-${idx}`}
                    type={field.type}
                    value={edu[field.name] || ''}
                    onChange={(e) =>
                      handleInputChange(
                        'education',
                        idx,
                        field.name,
                        e.target.value
                      )
                    }
                  />
                ))}
                <Button
                  type='button'
                  onClick={() => removeEntry('education', edu.id)}
                  text='Remove'
                  title='Education'
                />
              </div>
            ))}
            <Button
              type='button'
              onClick={() => addEntry('education')}
              text='Add'
              title='Education'
            />
          </FormWrapper>
          <FormWrapper title='Experience'>
            {formData.experience.map((exp, idx) => (
              <div key={exp.id} className='border-b pb-4 mb-4'>
                {fields.experience.map((field) => (
                  <Input
                    label={field.label}
                    name={field.name}
                    id={`${field.name}-${idx}`}
                    key={`${field.name}-${idx}`}
                    type={field.type}
                    value={exp[field.name] || ''}
                    onChange={(e) =>
                      handleInputChange(
                        'experience',
                        idx,
                        field.name,
                        e.target.value
                      )
                    }
                  />
                ))}
                <Button
                  type='button'
                  onClick={() => removeEntry('experience', exp.id)}
                  text='Remove'
                  title='Experience'
                />
              </div>
            ))}
            <Button
              type='button'
              onClick={() => addEntry('experience')}
              text='Add'
              title='Experience'
            />
          </FormWrapper>
        </div>
        <div className='w-full flex-1 bg-white rounded-lg shadow-md p-8 h-fit sticky top-8 print:shadow-none print:p-0 print:w-full print:max-w-none'>
          <CvOutput formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
