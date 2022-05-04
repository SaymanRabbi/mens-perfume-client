import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'
const Footer = () => {
    return (
        
<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
<div className="sm:flex justify-center sm:items-center sm:justify-between">
<Link to="/" className="flex justify-center items-center mb-4 sm:mb-0">
<img src={logo} className="mr-3 h-8" alt="Flowbite Logo"/>
<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Men's Perfume</span>
</Link>
<ul className="flex justify-center flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
<li>
<Link to='/' className="mr-4 hover:underline md:mr-6 ">Home</Link>
 </li>
<li>
<Link to='managesitem' className="mr-4 hover:underline md:mr-6 ">Manages Item</Link>
</li>
<li>
<Link to='/myitem' className="mr-4 hover:underline md:mr-6">My Item</Link>
</li>
<li>
<Link to='/addItem' className="mr-4 hover:underline md:mr-6">Add Item</Link>
                    </li>
                    <li>
<Link to='/blog' className="mr-4 hover:underline md:mr-6">Blog</Link>
</li>
</ul>
</div>
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
<span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="/" className="hover:underline">Men's Perfume™</Link>. All Rights Reserved.
</span>
</footer>

    );
};

export default Footer;