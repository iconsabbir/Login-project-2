import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;