import React, { useState } from 'react';
import Button from '../../components/Buttons/Button';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className='relative sm:p-16 px-6 py-36 bg-[#010038] sm:h-full h-auto'>
      <h1 className='text-white sm:text-6xl text-[2rem] font-bold text-center sm:mt-14'>Contact Us</h1>
      <div className='grid lg:grid-cols-2 items-center mt-10 gap-0 lg:gap-[-1px] bg-gray-200 lg:rounded-lg overflow-hidden'>
        <img
          src='/contactusVector.png'
          alt='Contact Us Illustration'
          className='w-full drop-shadow-lg h-full object-cover'
        />

        <form
          onSubmit={handleSubmit}
          className='p-8 shadow-md w-full'
        >
          <div className='my-6'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
          </div>

          <div className='my-6'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
          </div>

          <div className='my-6'>
            <label htmlFor='mobile' className='block text-sm font-medium text-gray-700 mb-2'>
              Mobile No
            </label>
            <input
              type='text'
              id='mobile'
              name='mobile'
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.mobile ? 'border-red-500' : ''}`}
            />
            {errors.mobile && <p className='text-red-500 text-sm mt-1'>{errors.mobile}</p>}
          </div>

          <div className='my-6'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='5'
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
          </div>

          <button
            type='submit'
            className='w-full'
          >
            <Button />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
