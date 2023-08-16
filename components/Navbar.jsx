// components/Navbar.jsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/"> home/ </Link>
            <Link href="/blog"> blog/ </Link>
            <Link href="/proj"> projects/ </Link>
            <Link href="/about"> about/ </Link>
        </nav>
    );
};

export default Navbar;
