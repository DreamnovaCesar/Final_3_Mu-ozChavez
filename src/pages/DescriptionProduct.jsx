// Import necessary components and libraries
import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import ItemDescriptionProduct from '../components/ItemDescriptionProduct';
import Footer from '../components/Footer';

import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ProductContext } from '../context/ProductContext';

import Loading from '../components/Loading';

function DescriptionProduct() {

  // Get the product ID from the URL parameters
  let { id } = useParams();

  // Get the products data from the ProductContext
  let { products } = useContext(ProductContext);

  // Find the product with the matching ID from the products data
  let product = products.find((item) => {
    console.log('ID found');
    return item.id === id;
  })

  // Show a loading component if the "products" data is not available yet
  if (!products || products.length === 0) {
    return <Loading />;
  }

  //console.log(product);
  //console.log(id);

  return (
    <div className='relative'>
    <Navbar />
    <Sidebar />
    <ItemDescriptionProduct 
        key={product.id}
        id={product.id} 
        image={product.image} 
        title={product.title} 
        rate={product.rate} 
        description={product.description} 
        price={product.price} 
        product={product} />
    <Footer />
    </div>
  );
};

// Export the DescriptionProduct component as the default export
export default DescriptionProduct;