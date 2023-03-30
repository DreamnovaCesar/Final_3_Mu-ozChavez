
// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let ItemProduct = (props) => {

  return (

    <div className=" bg-white relative max-w-md mx-2 rounded-md shadow-md overflow-hidden">
      <Link to={`/DescriptionProduct/${props.id}`}><img className="w-full h-56 object-contain" src={props.image} alt="Product Image" /></Link>
      <div className="p-4">
      <Link to={`/DescriptionProduct/${props.id}`}><h2 className="text-sm font-serif mb-2 hover:underline">{props.title}</h2></Link>
        <div className="mt-4">
          <span className="absolute left-5 bottom-3 text-gray-800 text-sm mr-2">Price:</span>
          <span className="absolute left-14 bottom-2 text-blue-700 text-lg font-bold">${props.price}</span>
        </div>
        
      </div>
 
    </div>

  );
};

export default ItemProduct;