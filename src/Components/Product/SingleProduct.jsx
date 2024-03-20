import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

function SingleProduct({product}) {
    useEffect
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}

export {SingleProduct}