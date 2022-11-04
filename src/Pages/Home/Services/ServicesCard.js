import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl border p-4 min-h-full">
                <figure><img src={img} alt="Shoes" className='rounded-lg' /></figure>
                <div className="mt-4">
                    <h2 className="font-medium text-2xl mb-3">{title}</h2>
                    <p className='text-xl font-medium mb-3 text-green-400'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCard;