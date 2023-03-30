import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import ItemDescriptionProduct from '../components/ItemDescriptionProduct';
import Footer from '../components/Footer';

function DescriptionProduct() {


  return (
      <div className='relative'>
        <Navbar />
        <Sidebar />
        <ItemDescriptionProduct />
        <Footer />
      </div>
  );
};


export default DescriptionProduct;