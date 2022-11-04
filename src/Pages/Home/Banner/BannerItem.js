import React from 'react';
import './bannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-lg" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-[35%]">
                <h1 className='text-6xl text-white font-bold'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                <p className="text-lg text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-[60%] w-3/4">
                <button className="btn btn-success mr-5">Discover More</button>
                <button className="btn btn-outline btn-success">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle mr-7 bg-red-500 border-none">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;