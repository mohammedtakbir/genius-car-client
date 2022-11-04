import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';  

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="hero pt-16">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" className='w-full' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <p className='text-4xl text-center mt-7 font-bold'>Login</p>
                        <form className="p-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <Link href="#" alt='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-success text-white" />
                            </div>
                        </form>
                        <p className='text-center mb-4'>Have an account? <Link to='/signup' className='text-green-500 hover:underline'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;