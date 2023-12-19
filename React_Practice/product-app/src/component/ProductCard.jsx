import React, { useState } from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {

  const navigate = useNavigate();

  const navigateFilerecon = (val) => {
    console.log("Hello" + val)
    navigate(`/${val}`);
  }

  return (
    <div className='container'>
      <div className='row'>
        {
          (Object.values(props.filterData).map((val, index) => {
            return (
              <div className='card col-md-3' onClick={() => navigateFilerecon(val.id)}>
                <div className='row'>
                  <div className='card-img'>
                    <img className='card-img-top' src={val.image} />
                  </div>
                  <br />
                  <span className='topTemp'>{val.title.slice(0, 40) + "..."}</span>
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