import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Signupvalidation';
import axios from 'axios';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                // console.log(values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-4 w-25'>
                <form action='' method='post' onSubmit={handleSubmit}>
                    <h2>Sign-Up</h2>
                    <div className='mb-3'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" placeholder='Enter Name' name="name"
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type="text" placeholder='Enter Email' name="email"
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" placeholder='Enter Password' name="password"
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>Sign-Up</button>
                    <p>You are agree to aour terms and policies</p>
                    <Link to='/' className="btn btn-success border w-100 text-decoration-none">Sign-In</Link>
                </form>
            </div>
        </div>
    )
}
export default Signup;