

import React, { useState } from 'react';
import TextField from '@mui/material/TextField'; 
import imgg from '../assets/imgg.png';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import { Alert } from 'antd';
import { Spin } from 'antd';



const Register = () => {
   const{loading,error,registerUser} = useSignup();
  
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
    passwordconfirm: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
    passwordconfirm: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const valid = validateFormData(); // Validate form data
  
    if (valid) {
      await registerUser(formData); // Pass formData to registerUser function
      console.log(formData); // Submit form data if valid
    }
  };
  
  const validateFormData = () => {
    let valid = true;
    const errors = { ...formErrors };
  
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        errors[key] = 'This field is required';
        valid = false;
      } else {
        errors[key] = '';
      }
    });
  
    if (formData.password !== formData.passwordconfirm) {
      errors.passwordconfirm = 'Passwords do not match';
      valid = false;
    } else {
      errors.passwordconfirm = '';
    }
  
    setFormErrors(errors);
    return valid;
  };
  
  return (
    <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8"> 
      <div className="sm:mx-auto sm:w-full sm:max-w-sm"> 
        <img className="w-auto mx-auto h-50" src={imgg} alt="Your Company"/> 
      </div>
     
      <div className="mt-5 sm:mx-auto sm:w-full md:w-3/4"> 
        <h1 className="mb-4 text-2xl text-left text-gray y-900 mb">Register</h1>
  
        <form className="space-y-6" onSubmit={handleRegister} autoComplete='off'> 
          <div className="grid grid-cols-12 gap-4 sm:col-span-12"> 
            <div className="col-span-6 "> 
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                fullWidth 
                name='firstname'
                value={formData.firstname}
                onChange={handleInputChange}
                required
                error={!!formErrors.firstname}
                helperText={formErrors.firstname}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red'
                  }
                }}
              />
            </div>
            <div className="col-span-6"> 
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth 
                name='lastname'
                value={formData.lastname}
                onChange={handleInputChange}
                required
                error={!!formErrors.lastname}
                helperText={formErrors.lastname}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red'
                  }
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4"> 
            <div className="col-span-6"> 
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth 
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
                error={!!formErrors.email}
                helperText={formErrors.email}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red'
                  }
                }}
              />
            </div>
            <div className="col-span-6"> 
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                fullWidth 
                name='phonenumber'
                value={formData.phonenumber}
                onChange={handleInputChange}
                required
                error={!!formErrors.phonenumber}
                helperText={formErrors.phonenumber}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red'
                  }
                }}
              />
            </div>
            <div className="col-span-6"> 
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password" 
                fullWidth 
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                required
                error={!!formErrors.password}
                helperText={formErrors.password}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red'
                  }
                }}
              />
            </div>
            <div className="col-span-6"> 
              <TextField
                id="passwordConfirm"
                label="Confirm Password"
                variant="outlined"
                type="password" 
                fullWidth 
                name='passwordconfirm'
                value={formData.passwordconfirm}
                onChange={handleInputChange}
                required
                error={!!formErrors.passwordconfirm}
                helperText={formErrors.passwordconfirm}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red'
                  }
                }}
              />
            </div>
            
        {/* {error && (
            <Alert description={error}
            type='error'
            showIcon closable className='alert'/>
        )} */}
            
          </div>
          <div>
            <button type=
            {`${loading?'':'primary'}`} 
            className="flex justify-center sm:w-1/4 rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
             {loading?<Spin/>:'Create Account'}
{/*              
              Create Account */}
            </button>
          </div>
        </form>
  
        <p className="mt-10 text-sm text-center text-gray-500"> 
          Already have an account? 
          <span className="ml-2"> 
            <a href="#" className="font-semibold leading-6 text-pink-400 hover:text-rose-500">Login</a>
          </span>
        </p>
        
      </div>
    </div>
  );
}

export default Register;


