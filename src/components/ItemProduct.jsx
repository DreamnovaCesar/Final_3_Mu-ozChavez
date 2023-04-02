import { Link } from 'react-router-dom';

// This is a functional component that renders a product item
let ItemProduct = (props) => {

  return (
    // The product item container
    <div className="bg-white relative max-w-md mx-2 my-5 rounded-md shadow-md overflow-hidden transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      {/* The link to the product description page */}
      <Link to={`/DescriptionProduct/${props.id}`}>
        {/* The product image */}
        <img className="w-full h-48 object-contain" src={props.image} alt="Product Image" />
      </Link>
      {/* The product information */}
      <div className="p-4">
        {/* The product title */}
        <Link to={`/DescriptionProduct/${props.id}`}><h2 className=" text-xs font-serif mb-2 hover:underline">{props.title}</h2></Link>
        {/* The product price */}
        <div className="mt-4">
          <span className="absolute left-5 bottom-3 text-gray-800 text-sm mr-2 font-semibold">Price:</span>
          <span className="absolute left-14 bottom-2 text-blue-700 text-lg font-semibold">${props.price}</span>
          <span className="absolute left-32 bottom-2 text-blue-700 text-lg font-semibold">${props.price}</span>
        </div>        
      </div>
    </div>
  );
};

export default ItemProduct;