import React, { useState } from 'react';
import './style.css';

function Createaccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
    age: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.password) tempErrors.password = 'Password is required';
    if (!formData.username) tempErrors.username = 'Username is required';
    if (!formData.age) tempErrors.age = 'Age is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      // Handle form submission
      // Example: submit the data to an API or server
    }
  };

  return (
    <div className='w-full h-screen bg-zinc-700'>
      <header className='w-full h-24 flex items-center justify-center'>
        <h1 className='text-5xl text-white'>
          Create your Account Now !!!
        </h1>
      </header>

      <form onSubmit={handleSubmit} method='post' action='/createaccount' >
        <div className='flex gap-5 justify-center'>
          <div className='flex flex-col items-center gap-2 justify-start mt-10'>
            <input
              type='text'
              name='name'
              placeholder='Enter your Name'
              value={formData.name}
              onChange={handleChange}
              className='w-64 h-10 bg-transparent border-none outline-none rounded-md text-xl text-center'
            />
            {errors.name && <span className='text-red-500'>{errors.name}</span>}
          </div>

          <div className='flex flex-col items-center justify-center mt-10'>
            <input
              type='email'
              name='email'
              placeholder='Enter your Email'
              value={formData.email}
              onChange={handleChange}
              className='w-64 h-10 bg-transparent border-none outline-none rounded-md text-xl text-center'
            />
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </div>

          <div className='flex flex-col items-center justify-end mt-10'>
            <input
              type='password'
              name='password'
              placeholder='Enter your Password'
              value={formData.password}
              onChange={handleChange}
              className='w-64 h-10 bg-transparent border-none outline-none rounded-md text-xl text-center'
            />
            {errors.password && <span className='text-red-500'>{errors.password}</span>}
          </div>
        </div>

        <div className='flex justify-center gap-20'>
          <div className='flex flex-col items-center justify-center mt-10'>
            <input
              type='text'
              name='username'
              placeholder='Enter your Username'
              value={formData.username}
              onChange={handleChange}
              className='w-64 h-10 bg-transparent border-none outline-none rounded-md text-xl text-center'
            />
            {errors.username && <span className='text-red-500'>{errors.username}</span>}
          </div>

          <div className='flex flex-col items-center justify-end mt-10'>
            <input
              type='number'
              name='age'
              placeholder='Enter your Age'
              value={formData.age}
              onChange={handleChange}
              className='w-64 h-10 bg-transparent border-none outline-none rounded-md text-xl text-center'
            />
            {errors.age && <span className='text-red-500'>{errors.age}</span>}
          </div>
        </div>

        <div className='btn flex items-center justify-center w-full'>
          <button type='submit' className='w-64 h-10 rounded-md hover:text-black hover:bg-transparent transition duration-500 cursor-pointer ease-in-out hover:border-2 hover:border-black bg-blue-500 mt-10 text-white text-xl'>
           <a href="/home">
           Create Account
            </a> 
          </button>
        </div>
      </form>
    </div>
  );
}

export default Createaccount;
