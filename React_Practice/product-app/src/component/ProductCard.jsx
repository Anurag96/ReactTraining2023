import React, { useState } from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {

  const navigate = useNavigate();

  const navigateFilerecon = (val) => {
    console.log("Hello" + val)
    navigate(`/product/${val}`);
  }

  return (
    <div className='container' style={{ maxWidth: '1260px', marginLeft: '4rem' }}>
      <div className='row'>
        {
          (Object.values(props.filterData).map((val, index) => {
            return (
              <div className='card col-md-3' onClick={() => navigateFilerecon(val.id)} style={{ margin: '1rem' }}>
                <div className='row' >
                  <div className='card-img'>
                    <img className='card-img-top' src={val.image} />
                  </div>
                  <br />
                  <span className='topTemp'>{val.title}</span>
                  <br />
                  <div className='card-body'>
                    <span className='max'>$. {val.price}</span>
                    <div className='card-text'>
                      <p className='day'>Rating : {val.rating.rate}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }))
        }
      </div>
    </div>
  )
}

export default ProductCard