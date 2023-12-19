import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard'
import Search from './Search';
import { useParams } from 'react-router-dom';

const Catagories = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [url, setUrl] = useState('')

    const fetchData = async () => {

        console.log(url)
        // Actual API Call
        try {
            const baseURL = `https://fakestoreapi.com/products/category/${params.item}`;
            const response = await axios.get(`${baseURL}`)
                .then(response => response.data)
                .then(response => {
                    setData(response)
                    return response
                })
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
        setUrl(params.item)
    }, []);

    return (
        <div>
            <div>{params.category} : {params.item}</div>
            <Search data={data} setFilterData={setFilterData} />

            <ProductCard filterData={filterData} />
        </div>
    )
}

export default Catagories
