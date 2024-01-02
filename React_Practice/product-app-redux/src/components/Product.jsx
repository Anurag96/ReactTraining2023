import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product() {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err)
        })
        setProducts(response.data)
        // console.log(response.data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    // const cards = products.map((e) => (
    //     <div className='col-lg-3'>
    //         <Card style={{ width: '18rem', paddingRight: '2rem' }}>
    //             <Card.Img variant="top" src={e.image} />
    //             <Card.Body>
    //                 <Card.Title>{e.title}</Card.Title>
    //                 <Card.Text>
    //                     {e.description}
    //                 </Card.Text>
    //                 <Button variant="primary">Add to Cart</Button>
    //             </Card.Body>
    //         </Card>
    //     </div>

    // ))
    return (
        <div>
            <h2>Dashboard</h2>
            {/* {JSON.stringify(products)} */}
            <ProductCard products={products} />
            {/* <div className="row">
                {cards}
            </div> */}

        </div>
    )
}

export default Product
