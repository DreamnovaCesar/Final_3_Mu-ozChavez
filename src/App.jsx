import { useState } from 'react'
import Home from './pages/Home'
import DescriptionProduct from './pages/DescriptionProduct.jsx'
import Contact from './pages/Contact';
import AddProducts from './pages/AddProducts';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path="/DescriptionProduct/:id" element = {<DescriptionProduct />} />
          <Route path="/Category/:category" element = {<Home />} />
          <Route path="/Contact" element = {<Contact />} />
          <Route path="/Addproducts" element = {<AddProducts />} />
        </Routes>
      </Router>
    </div>   
  );
}

export default App
