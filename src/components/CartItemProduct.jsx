
// ItemListContainer.js
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5'
import { IoMdRemove } from 'react-icons/io'
import { IoMdAdd } from 'react-icons/io'
import { useContext } from 'react';

import { CartContext } from '../context/CartContext';

let CartItemProduct = (props) => {

  let { removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);

  return (

    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-700'>
      <div className='w-full min-h-[180px] flex items-center gap-x-4 '>
        <div>
        <Link to={`/DescriptionProduct/${props.id}`}>
          <img className=" max-w-[60px]" src={props.image}/>
        </Link>
          
        </div>
          <div className='w-full justify-between mb-2'>
            <Link 
              to={`/DescriptionProduct/${props.id}`}
              className=' text-sm uppercase font-medium max-w-[240px]
              text-primary hover:underline'>
                {props.title}
            </Link>
            <div className='flex gap-x-2 h-[36px] text-sm'>
              <div className='flex flex-1 max-w-[100px]  items-center
              h-full border text-primary font-medium'>
                <div onClick={()=>decreaseAmount(props.id)} className='flex-1 h-full flex justify-center items-center
                cursor-pointer'>
                  <IoMdRemove/>
                </div>
                <div className='h-full flex justify-items-center items-center px-2'>
                  {props.amount}
                </div>
                <div onClick={()=>increaseAmount(props.id)} className='flex-1 h-full flex justify-center items-center
                cursor-pointer'>
                  <IoMdAdd/>
                </div>
              </div>
              <div className='flex-1 flex items-center justify-around'>
                $ {props.price}
              </div>
              <div className='flex-1 flex justify-end items-center text-primary font-medium'>
                 {`$ ${parseFloat(props.price * props.amount).toFixed(2)}`}
              </div>
            </div>
            
          </div>
          <div onClick={() => removeFromCart(props.id)}
          className='text-xl cursor-pointer'>
                <IoClose className=' text-gray-500 hover:text-red-500 transition'/>
          </div>

          <div>

          </div>
      </div>
    </div>

  );
};

export default CartItemProduct;