import { SingleProduct } from "./SingleProduct";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductList({products}) {
    return(
        <Container>
            <Row>
                {products?.map(product => {
                    return(
                        <Col key={product.id} className="mb-4">
                            <SingleProduct product={product} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export {ProductList}