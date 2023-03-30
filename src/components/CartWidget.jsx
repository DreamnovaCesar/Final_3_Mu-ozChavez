import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';

import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';

const CartWidget = () => {

    let { isOpen, setIsOpen } = useContext(SidebarContext);

    console.log(isOpen)

    return (
      <div className="flex items-center">
        <span className="ml-2 bg-gray-100 rounded-full px-7 py-2 text-sm font-medium text-gray-600" >0</span>
        <BsFillCartCheckFill onClick = {() => setIsOpen(!isOpen)} className="cursor-pointer ml-6 text-gray-200" size={28} />
      </div>
    );
  };
  
export default CartWidget;
  