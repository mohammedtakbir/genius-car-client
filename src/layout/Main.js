import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;