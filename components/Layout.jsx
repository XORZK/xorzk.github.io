// components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/global.css"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main> { children } </main>
        </div>
    );
};

export default Layout;
