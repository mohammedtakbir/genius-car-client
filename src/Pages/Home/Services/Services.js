import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div className='text-center mt-12 mb-16'>
                <h2 className='text-green-400 font-semibold text-xl mb-5'>Services</h2>
                <h3 className='text-5xl font-bold mb-5'>Our Service Area</h3>
                <p className='text-gray-400 w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </>
    );
};

export default Services;