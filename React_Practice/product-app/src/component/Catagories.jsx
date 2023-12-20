import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard'
import Search from './Search';
import { useParams } from 'react-router-dom';
import { storeIsLoading } from '../redux/loadingSlice';
import { useSelector, useDispatch } from "react-redux";

const Catagories = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const params = useParams();
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [url, setUrl] = useState('')

    const fetchData = async () => {

        console.log(url)
        // Actual API Call
        try {
            dispatch(storeIsLoading(true));
            const baseURL = `https://fakestoreapi.com/products/category/${params.item}`;
            const response = await axios.get(`${baseURL}`)
                .then(response => response.data)
                .then(response => {
                    setData(response)
                    return response
                })
                .then(response => setFilterData(response))
            dispatch(storeIsLoading(false));
            // setData(response);
        } catch (error) {
            console.error('Error fetching data:', error);
            dispatch(storeIsLoading(false));
        }

        // Mock the Data
        // setData(productData);
    };


    useEffect(() => {
        fetchData()

    }, []);

    return (
        <div>
            <div style={{ textAlign: 'center' }}>{params.category.toUpperCase()} : {params.item.toUpperCase()}</div>
            <Search data={data} setFilterData={setFilterData} />
            {!isLoading && <ProductCard filterData={filterData} />}
            {isLoading && <>
                <div class="spinner-border" role="status" style={{ marginLeft: '50%' }}>
                    <span class="sr-only">Loading...</span>
                </div>
            </>}
        </div>
    )
}

export default Catagories
