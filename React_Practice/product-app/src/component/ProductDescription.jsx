import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './ProductDescription.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from "react-router-dom";

function ProductDescription() {
    const [data, setData] = useState([]);
    const params = useParams();

    const fetchData = async () => {
        // Actual API Call
        try {
            const baseURL = `https://fakestoreapi.com/products/${params.id}`;
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
            <div>
                <div className="container bootdey">
                    <div className="row">
                        <section className="panel">
                            <div className="panel-body">
                                <div className="row row-no-gutters">
                                    <div className="col-sm-4 mx-4" style={{ backgroundColor: "lavender" }}>
                                        <div className="pro-img-details">
                                            <img src={data.image} alt="" />
                                        </div>
                                    </div>


                                    <div className="col-sm-7" style={{ backgroundColor: "lavenderblush" }}>
                                        <h4 className="pro-d-title">
                                            <a href="#/" className="">
                                                {data.title}
                                            </a>
                                        </h4>
                                        <p>
                                            {data.description}
                                        </p>
                                        <div className="product_meta">
                                            <span className="posted_in"> <strong>Categories:</strong> {data.category}</span>
                                            <span className="posted_in"> <strong>Rating:</strong> {data?.rating?.rate}</span>

                                        </div>
                                        <div className="m-bot15"> <strong>Price : </strong> <span className="pro-price"> ${data.price}</span></div>
                                        {/* <div className="form-group">
                                            <label>Quantity</label>
                                            <input type="quantiy" placeholder="1" className="form-control quantity" />
                                        </div> */}
                                        <br />
                                        <p>
                                            <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
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