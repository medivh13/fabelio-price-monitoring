import React, { useEffect } from 'react';
import useProductState from '../states/useProductState';
import { Link } from 'react-router-dom';
import { Form, Table, Breadcrumb, Row, Col} from 'react-bootstrap';


function ProductList(){
  const { fetchProducts, products } = useProductState([]);

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

return (
  <Form>
    <Breadcrumb>
      <Row>
        <Col>
          <center>Product List</center>
        </Col>
      </Row>
    </Breadcrumb>
    <Table width="100%" striped bordered hover>
      <thead>
        <tr>
        <th>Product Link</th>
        <th>Product Name</th>
        <th>Latest Price</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
      { products.map((product, index) => (
        <tr key={index}>
          <td>
            {product.url}
          </td>
          <td>
            {product.name}
          </td>
          <td>
            Rp. {product.prices[product.prices.length-1].price}
          </td>
          <td>
            <Link to={`/products/${product._id}`}>Detail</Link>      
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  </Form> 
)
}

export default ProductList;