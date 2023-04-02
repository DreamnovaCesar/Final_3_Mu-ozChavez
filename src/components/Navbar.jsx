// Navbar.js
import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

/*<Link to={`/Addproducts`}><button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        Add Products
      </button></Link>*/

const Navbar = () => {
  
  return (
    <nav className="bg-gray-900 shadow-lg p-5">
      <div className="">
      </div>
      <ul className="flex justify-end items-start p-1">
        <CartWidget />
      </ul>
    </nav>
  );
};

export default Navbar;