import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './ProductDescription.css'

function ProductDescription() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        // Actual API Call
        try {
            const baseURL = 'https://fakestoreapi.com/products/1';
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
            {JSON.stringify(data)}
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
        </div>
    )
}

export default ProductDescription