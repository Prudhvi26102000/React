import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import {Link} from 'react-router-dom'
const AdminSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
    return(
            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit} noValidate>
                    <div className='form-inputs'>
                        <label htmlFor='username'
                        className='form-lablel'>
                            </label>
                            <input
                            id='username'
                            type='text'
                            name='username'
                            className='form-input'
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                            />
                            {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='email'
                        className='form-lablel'>
                            </label>
                            <input
                            id='email'
                            type='email'
                            name='email'
                            className='form-input'
                            placeholder="email"
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='mobilenumber'
                        className='form-lablel'>
                            </label>
                            <input
                            id='mobilenumber'
                            type='number'
                            name='mobilenumber'
                            className='form-input'
                            placeholder="Mobile Number"
                            value={values.mobilenumber}
                            onChange={handleChange}
                            />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='password'
                        className='form-lablel'>
                            </label>
                            <input
                            id='password'
                            type='password'
                            name='password'
                            className='form-input'
                            placeholder="password"
                            value={values.password}
                            onChange={handleChange}
                            />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='confirm password'
                        className='form-lablel'></label>
                            <input
                            id='password2'
                            type='password'
                            name='password2'
                            className='form-input'
                            placeholder="Confirm Password"
                            value={values.password2}
                            onChange={handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button className='form-input-btn'
                    type='submit'>
                        Sign up
                    </button>
                    <span className="form-input-login">
                        Already havean account? Login <Link to="/login">here</Link>
                    </span>
                </form>
            </div>
);
};
export default AdminSignup;
