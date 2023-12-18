import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import productData from './productData.json'
import Search from './Search';
import ProductDescription from './ProductDescription';


function Product() {

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([])
  const fetchData = async () => {
    // Actual API Call
    try {
      const baseURL = 'https://fakestoreapi.com/products';
      const response = await axios.get(`${baseURL}`)
        .then(response => response.data)
        .then(response => {setData(response) 
        return response})
        .then(response => setFilterData(response))
      // setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // Mock the Data
    // setData(productData);
  };


  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div>
      <Search data={data} setFilterData={setFilterData}/>
      Product
      {/* {JSON.stringify(data)} */
      /**
       * The concept of filter is to pass filter data to main component and original data  & setter to Search 
       */
      }
      {/* <ProductCard filterData={filterData} /> */}
      <ProductDescription />
    </div>
  )
}

export default Product