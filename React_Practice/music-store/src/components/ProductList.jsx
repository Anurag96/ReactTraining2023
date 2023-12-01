import React from 'react'
import './Products.css'

const ProductList = (productList) => {
    const renderList = ({ productList }) => {
        if (productList) {
            return productList.map((data) => {
                return (
                    <div key={data.id} className='card col-md-3'>
                        <div className='row'>
                            <div className='card-img'>
                                <img className='card-img-top' src={data.img} alt={data.name} />
                            </div>
                            <hr />
                            <span className='topTemp'>{data.name}</span>
                            <div className='card-body'>
                                <span className='max'>Rs. {data.price}</span>
                                <h4 className='card-title'>Rs. {data.type}</h4>
                                <div className='card-text'>
                                    <p className='day'>Rs {data.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                {renderList(productList)}
            </div>
        </div>
    )
}

export default ProductList
