import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    return (
        <>
            {Object.values(products).map(e =>
            (
                <div className='four column wide' style={{width:'30%'}}>
                    <div className="ui link cards">
                        <div className='card'>
                            <div className='image'>
                                <img src={e.image}/>
                            </div>
                            <div className="content">
                                <div className="header">
                                    {e.title}
                                </div>
                                <div className="meta price">
                                    {e.price}
                                </div>
                                <div className="meta">
                                    {e.category}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
            )}

        </>
    )
}

export default ProductComponent
