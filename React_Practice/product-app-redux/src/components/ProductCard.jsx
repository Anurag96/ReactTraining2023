import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/esm/CardFooter';

function ProductCard({ products }) {
    const productList = (products).map((e) => (
        <div className='col-md-3' style={{ marginBottom: '2rem' }}>
            <Card className='h-100' >
                <div className='text-center'><Card.Img variant="top" src={e.image} style={{ width: '180px', height: '180px' }} /></div>
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                        Price : ${e.price} || Rating : {e?.rating?.rate}
                    </Card.Text>
                    <Card.Text>
                        Category : {e.category.toUpperCase()}
                    </Card.Text>
                    <Card.Text>
                        {e.description}
                    </Card.Text>
                </Card.Body>
                <CardFooter>
                    <Button variant="primary">Add to Cart</Button>
                </CardFooter>
            </Card>
        </div>
    ))
    return (
        <div className="row">

            {
                productList
            }
        </div>
    );
}

export default ProductCard;