// Import required modules and components
import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import ItemProduct from '../components/ItemProduct';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AddProduct from '../config/AddProduct';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

// Define a function component called Home
function Home() {

  // Get the "category" parameter from the URL using the useParams hook from react-router-dom
  let { category } = useParams();

  // Get the "products" data from the ProductContext using the useContext hook from React
  let { products } = useContext(ProductContext);

  // Get the navigate function from the useNavigate hook from react-router-dom
  let navigate = useNavigate();

  // Show a loading component if the "products" data is not available yet
  if (!products) {
    return <Loading />; 
  }

  // Define a state variable called "selectedCategory" using the useState hook from React
  let [selectedCategory, setSelectedCategory] = useState(category || '');

  // Define a function called "handleCategoryChange" that sets the selected category and updates the URL
  let handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/Category/${category}`);
  };

  // Define a function called "handleResetCategory" that resets the selected category and updates the URL
  let handleResetCategory = () => {
    setSelectedCategory("");
    navigate("/");
  };

  // Filter the products based on the selected category
  let filteredProducts =
    selectedCategory && selectedCategory !== "ALL"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  // Create an array of all categories for the select dropdown menu
  let allCategories = ["ALL", ...new Set(products.map((product) => product.category))];

  // Log the filtered products and the category for debugging purposes
  console.log(filteredProducts);
  console.log(category);

  // Show a loading component if the "filteredProducts" data is not available yet
  if (!filteredProducts) {
    return <Loading />; 
  }

  // Render the Home component with the following elements
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="p-5">
        <label htmlFor="category-select">Select a category:  </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

      </div>

      <div className="bg-gray-100 p-2 shadow-sm">
        <div className="bg-gray-100 p-10">
          <div className="grid gap-1 sm:grid-cols-5 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ItemProduct
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                count={product.count}
                rate={product.rate}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Export the Home component as the default export of the module
export default Home;