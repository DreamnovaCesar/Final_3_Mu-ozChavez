import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AddProduct from '../config/AddProduct';

function AddProducts() {
    
  return (
      <div>
        <Navbar />
        <Sidebar />
        <AddProduct />
        <Footer />
      </div>
  );
};


export default AddProducts;