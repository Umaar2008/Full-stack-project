import React, { useState } from 'react';
import './style.css';

function Login() {
  const [Login, setLogin] = useState({
    
    email: '',
    password: '',
    
   
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...Login,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!Login.email) tempErrors.email = 'Email is required';
    if (!Login.password) tempErrors.password = 'Password is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login:', Login);
      // Handle form submission
      // Example: submit the data to an API or server
    }
  };

  return (
    <div className='w-full h-screen bg-zinc-700'>
      <header className='w-full h-24 flex items-center justify-center'>
        <h1 className='text-5xl text-white'>
         Login Now !!!
        </h1>
      </header>

      <form onSubmit={handleSubmit} method='post' action='/login' >
        <div className='flex gap-5 justify-center'>
         

          <div className='flex flex-col items-center justify-center mt-10'>
            <input
              type='email'
              name='email'
              placeholder='Enter your Email'
              value={Login.email}
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
              value={Login.password}
              onChange={handleChange}
              className='w-64 h-10 bg-transparent border-none outline-none rounded-md text-xl text-center'
            />
            {errors.password && <span className='text-red-500'>{errors.password}</span>}
          </div>
        </div>

    

        

        <div className='btn flex items-center justify-center w-full'>
          <button type='submit' className='w-64 h-10 rounded-md hover:text-black hover:bg-transparent transition duration-500 cursor-pointer ease-in-out hover:border-2 hover:border-black bg-blue-500 mt-10 text-white text-xl'>
           <a href="/home">
           Login
            </a> 
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
