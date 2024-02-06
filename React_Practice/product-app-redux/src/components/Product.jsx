import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../store/LoaderSlice'
import { getProducts } from '../store/productSlice';

function Product() {
    const dispatch = useDispatch()
    //For Reading the state of loader
    const loadStatus = useSelector((state) => state.load)
    const products = useSelector(state => state.products)
    const status = useSelector(state => state.products)
    // console.log(products)
    console.log(status.status)

    // const [products, setProducts] = useState([])
    const fetchProducts = async () => {

        // dispatch(isLoading(false))
        // const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
        //     console.log(err)
        // })
        // setProducts(response.data)

        dispatch(getProducts())

        dispatch(isLoading(true))
        // console.log(response.data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    if (status.status === 'loading') {
        return <p><div>
            <span className="sr-only">Loading...</span>
        </div></p>
    }
    if (status.status === 'error') {
        return <p><div>
            <span className="sr-only">You're seeing error</span>
        </div></p>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            {/* {JSON.stringify(products.data)} */}
            {isLoading &&
                <ProductCard products={products.data} />}

            {/* {status === 'loading' && <>
                <div className="spinner-border" role="status" style={{ marginLeft: '18rem' }}>
                    <span className="sr-only">Loading...</span>
                </div>
            </>} */}

        </div>
    )
}

export default Product
