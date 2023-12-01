import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams();
    return (
        <div>
            <h1>Products</h1>
            <strong>Select A product</strong>
            <ul>
                <li><Link to='/product/cloth gucci shirts'>Book</Link></li>
                <li><Link to='/product/pen cello ballpoint'>Pen</Link></li>
                {/*   <li><Link to='/product/secret, silk woolen' />Clothes</li> */}
            </ul>
            <p>You're at {params.id} selection Store</p>
        </div>
    )
}

export default Product
