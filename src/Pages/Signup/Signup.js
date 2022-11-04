import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.error(err))
    }

    return (
        <>
            <div className="hero pt-16">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" className='w-full' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <p className='text-4xl text-center mt-7 font-bold'>Sign Up</p>
                        <form onSubmit={handleSignUp} className="p-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Your name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Email address"
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
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-success text-white" />
                            </div>
                        </form>
                        <p className='text-center mb-4'>Already have an account? <Link to='/login' className='text-green-500 hover:underline'>Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;