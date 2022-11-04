import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero py-16">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className='w-1/2 relative'>
                        <img alt='/' src={person} className="rounded-lg shadow-2xl w-4/5" />
                        <img alt='/' src={parts} className="rounded-lg shadow-2xl w-3/5 absolute right-0 top-1/2 border-8 border-white" />
                    </div>
                    <div className='w-1/2'>
                        <h2 className='text-green-400 font-medium mb-3'>About Us</h2>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6 text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="text-gray-400 mb-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-success">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;