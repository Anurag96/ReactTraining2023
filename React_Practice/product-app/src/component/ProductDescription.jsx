import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './ProductDescription.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDescription() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        // Actual API Call
        try {
            const baseURL = 'https://fakestoreapi.com/products/12';
            const response = await axios.get(`${baseURL}`)
                .then(response => response.data)
                .then(response => {
                    setData(response)
                    return response
                })
            // setData(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        // Mock the Data
        // setData(productData);
    };


    useEffect(() => {
        fetchData()
    }, []);

    const cardStyle = {
        listStyle: "none",
        margin: 5,
        paddingLeft: 0,
        minWidth: 240,
    };

    return (
        <div className='wrapper'>
            {/* {JSON.stringify(data)} */}
            <br />

            {(<>
                {/* <div class="one"><img src={data.image} class="card-img-top" alt="..." /></div>
                <div class="">{data.title}</div>
                <div class="">${data.price}</div>
                <div class="">{data.rating.rate}</div>
                <div class="">{data.description}</div> */}

                {/* <>
                    <div className="latestdeals container my-5">
                        <h1>All Products</h1>
                        <Row className="hotcards">
                            <Col className="colcard">
                               
                                    <div key={item.productCode} style={cardStyle}>
                                        <a href={`/itemDetail/${item.productCode}`}>
                                            {" "}
                                            <StyledCard
                                                key={item.productCode}
                                                name={item.vendor}
                                                title={item.description}
                                                price={item.value}
                                            />
                                        </a>
                                    </div>
                                
                            </Col>
                        </Row>
                    </div>
                </> */}
            </>)}


            <div>
                <div class="container bootdey">
                    <div class="row">
                        <section class="panel">
                            <div class="panel-body">
                                <div class="row row-no-gutters">
                                    <div class="col-sm-4 mx-4" style={{ backgroundColor: "lavender" }}>
                                        <div class="pro-img-details">
                                            <img src={data.image} alt="" />
                                        </div>
                                    </div>


                                    <div class="col-sm-7" style={{ backgroundColor: "lavenderblush" }}>
                                        <h4 class="pro-d-title">
                                            <a href="#/" class="">
                                                {data.title}
                                            </a>
                                        </h4>
                                        <p>
                                            {data.description}
                                        </p>
                                        <div class="product_meta">
                                            <span class="posted_in"> <strong>Categories:</strong> {data.category}</span>
                                            <span class="posted_in"> <strong>Rating:</strong> {data.rating.rate}</span>

                                        </div>
                                        <div class="m-bot15"> <strong>Price : </strong> <span class="pro-price"> ${data.price}</span></div>
                                        <div class="form-group">
                                            <label>Quantity</label>
                                            <input type="quantiy" placeholder="1" class="form-control quantity" />
                                        </div>
                                        <p>
                                            <button class="btn btn-round btn-danger" type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription