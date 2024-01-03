import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../store/LoaderSlice'

function Product() {
    const dispatch = useDispatch()
    //For Reading the state of loader
    const loadStatus = useSelector((state) => state.load)
    console.log(loadStatus)

    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        //dispatching the state of loader
        dispatch(isLoading(false))
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err)
        })
        setProducts(response.data)
        dispatch(isLoading(true))
        // console.log(response.data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <h2>Dashboard</h2>

            {isLoading &&
                <ProductCard products={products} />}

            {isLoading && <>
                <div className="spinner-border" role="status" style={{ marginLeft: '18rem' }}>
                    <span className="sr-only">Loading...</span>
                </div>
            </>}

        </div>
    )
}

export default Product
