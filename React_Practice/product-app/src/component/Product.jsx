import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import productData from './productData.json'
import Search from './Search';
import ProductDescription from './ProductDescription';
import { useNavigate, useParams } from "react-router-dom";
import { storeIsLoading } from '../redux/loadingSlice';
import { useSelector, useDispatch } from "react-redux";


function Product() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loadingSlice);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([])

  const fetchData = async () => {
    // Actual API Call
    try {
      // dispatch(storeIsLoading(true));
      const baseURL = 'https://fakestoreapi.com/products';
      const response = await axios.get(`${baseURL}`)
        .then(response => response.data)
        .then(response => {
          setData(response)
          return response
        })
        .then(response => setFilterData(response))
    } catch (error) {
      console.error('Error fetching data:', error);
      // dispatch(storeIsLoading(false));
    }
    finally {
      // dispatch(storeIsLoading(false));
    }

    // Mock the Data

    // setTimeout(() => {
    //   dispatch(storeIsLoading(true));
    //   setData(productData);
    //   setFilterData(productData);
    //   dispatch(storeIsLoading(false));
    // }, 2000);
  };


  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div>
      PRODUCT
      <Search data={data} setFilterData={setFilterData} />

      {/* {JSON.stringify(data)} */
        /**
         * The concept of filter is to pass filter data to main component and original data  & setter to Search 
         */
      }

      {!isLoading && <ProductCard filterData={filterData} />}
      {!isLoading && <>
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </>}
      {/* <ProductDescription /> */}
    </div>
  )
}

export default Product