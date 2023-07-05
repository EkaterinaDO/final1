import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Footer from './footer/Footer.jsx';


export const Layout = () => {
    return (
        <>
            <Header />
            <main className='wrapper-layout'>
            <Outlet />
            </main>
            <Footer />
        </>
    )
}