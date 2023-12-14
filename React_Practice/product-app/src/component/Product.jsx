import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import productData from './productData.json'


function Product() {

  const [data, setData] = useState([]);
  const fetchData = async () => {
    // Actual API Call
    try {
      const baseURL = 'https://fakestoreapi.com/products';
      const response = await axios.get(`${baseURL}`)
        .then(response => response.data);
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // Mock the Data
    // setData(productData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>Product
      {/* {JSON.stringify(data)} */}
      <ProductCard data={data} />
    </div>
  )
}

export default Product