import React from 'react'
import './Products.css'

function ProductCard(props) {
  return (
    <div className='container'>
      <div className='row'>
        {
          Object.values(props.data).map((val, index) => {
            return (
              <div className='card col-md-3'>
                <div className='row'>
                  <div className='card-img'>
                    <img className='card-img-top' src={val.image} />
                  </div>
                  <br />
                  <span className='topTemp'>{val.title.slice(0, 40) + "..."}</span>
                  <br />
                  <div className='card-body'>
                    <span className='max'>Rs. {val.price}</span>
                    <div className='card-text'>
                      <p className='day'>Rating : {val.rating.rate}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductCard