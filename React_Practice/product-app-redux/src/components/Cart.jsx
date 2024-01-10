import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/esm/CardFooter';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";


function Cart() {
    const dispatch = useDispatch()
    const productCart = useSelector(state => state.cart)
    const removeToCart = (id) => {
        dispatch(remove(id))
    }
    const productList = (productCart).map((e) => (
        <div className='col-md-3' style={{ marginBottom: '2rem' }}>
            <Card className='h-100' >
                <div className='text-center'><Card.Img variant="top" src={e.image} style={{ width: '80px', height: '80px' }} /></div>
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                        Price : ${e.price}
                    </Card.Text>
                    <Card.Text>
                        Category : {e.category.toUpperCase()}
                    </Card.Text>
                    {/* <Card.Text>
                        {e.description}
                    </Card.Text> */}
                </Card.Body>
                <CardFooter>
                    <Button variant="danger" onClick={() => removeToCart(e.id)}>Remove Item</Button>
                </CardFooter>
            </Card>
        </div>
    ))
    return (
        <div>
            <h1>Shopping Cart</h1>
            {/* <div className="row">
                {productList}
            </div> */}

            {productCart.length &&
            (<div>
                <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <MDBContainer >
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol size="12">
                            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <MDBCardBody className="p-0">
                                    <MDBRow className="g-0">
                                        <MDBCol lg="8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <MDBTypography className="mb-0 text-muted">
                                                        Total : {productCart.length} Item/s
                                                    </MDBTypography>
                                                </div>
                                                {
                                                    (productCart).map((e) => (
                                                        <>
                                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                                <MDBCol md="2" lg="2" xl="2">
                                                                    <MDBCardImage
                                                                        src={e.image}
                                                                        fluid className="rounded-3" alt="Cotton T-shirt" />
                                                                </MDBCol>
                                                                <MDBCol md="3" lg="3" xl="3">
                                                                    <MDBTypography tag="h6" className="text-muted">
                                                                        {e.category}
                                                                    </MDBTypography>
                                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                                        {e.title}
                                                                    </MDBTypography>
                                                                </MDBCol>
                                                                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                                    <MDBBtn color="link" className="px-2">
                                                                        <MDBIcon fas icon="minus" />
                                                                    </MDBBtn>

                                                                    <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                                                                    <MDBBtn color="link" className="px-2">
                                                                        <MDBIcon fas icon="plus" />
                                                                    </MDBBtn>
                                                                </MDBCol>
                                                                <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                                    <MDBTypography tag="h6" className="mb-0">
                                                                        {e.price}
                                                                    </MDBTypography>
                                                                </MDBCol>
                                                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                                    <a href="#!" className="text-muted">
                                                                        <MDBIcon fas icon="times" />
                                                                    </a>
                                                                </MDBCol>
                                                                <CardFooter>
                    <Button variant="danger" onClick={() => removeToCart(e.id)}>Remove Item</Button>
                </CardFooter>
                                                            </MDBRow>
                                                            <hr className="my-4" />
                                                        </>
                                                    ))
                                                }


                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            </div>)
            }
            {
                // JSON.stringify(productCart)
                !productCart.length && (
                    <div>
                        No Items added in the cart!
                    </div>
                )
            }

        </div>
    )
}

export default Cart