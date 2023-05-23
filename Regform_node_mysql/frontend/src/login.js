import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './Loginvalidation';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-4 w-25'>
                <form action='' onSubmit={handleSubmit}>
                    <h2>Sign-In</h2>
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
                    <button type="submit" className='btn btn-primary w-100'>Login</button>
                    <p>You are agree to aour terms and policies</p>
                    <Link to='/signup' className="btn btn-success border w-100 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    )
}
export default Login;