import React, { useState } from 'react';
import './SignUpStyles.css';
import Validation from './SignUpValidation';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const navigate=useNavigate();
    
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        if (
            validationErrors.firstname === '' &&
            validationErrors.lastname === '' &&
            validationErrors.email === '' &&
            validationErrors.password === ''
        ) {
            axios
                .post('http://localhost:8081/signup', values)
                .then((res) =>{
                    navigate('/Login')
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100 background-'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='Firstname'>
                            <strong>First name</strong>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter First Name'
                            name='firstname'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Lastname'>
                            <strong>Last name</strong>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Last Name'
                            name='lastname'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Sign Up
                    </button>
                    <p>You agree to your terms and policies</p>
                    <Link to='/Login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
