import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import ItemProduct from '../components/ItemProduct';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AddProduct from '../config/AddProduct';

function Home() {

  let { products } = useContext(ProductContext);
  let navigate = useNavigate();

  let [selectedCategory, setSelectedCategory] = useState("");

  let handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/Category/${category}`);
  };

  let filteredProducts = selectedCategory && selectedCategory !== "all"
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  let allCategories = ["all", ...new Set(products.map((product) => product.category))];

  console.log(products);

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className='p-5'>
      <label htmlFor="fixedcategory-select">Select a category:</label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                {allCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
      </div>
      
      <div className=" bg-gray-300 p-2 shadow-lg">
        <div className="bg-gray-200 p-10">
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

export default Home;