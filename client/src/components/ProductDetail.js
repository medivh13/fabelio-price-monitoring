import React, { useEffect } from 'react';
import useProductState from '../states/useProductState';
import Moment from 'react-moment';
import { Nav, Table, Breadcrumb, Container, Row, Col, Carousel } from 'react-bootstrap';
import NumberFormat from 'react-number-format';


function ProductDetail({ match }){
  const { fetchProduct, product } = useProductState({ prices: [{}], imgUrls: []});

  useEffect( () => {
    fetchProduct(match.params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumb>Product Detail</Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          {product.name}
        </Col>
        <Col>
          <NumberFormat value={product.prices[0].price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{__html: product.description}} />
        </Col>
      </Row>
      <br></br>
      <p>*ps : Silahkan klik tanda panah kanan/kiri pada sisi kanan/kiri gambar untuk menggeser gambar menuju gambar yang lain</p>
      <Row>
        <Col>
        <center>
            <Carousel slide ="true">
              {product.imgUrls.map( (url, index) => (
              // <Col key={index}>
              //   <center><Image src={url} alt="Product Look" rounded width="200px"/></center>
              // </Col>
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={url}
                  alt="First slide"
                  width="50%"
                />
              </Carousel.Item>
              ))}
            </Carousel>
          </center>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Breadcrumb>
            <Nav>
            Source link : 
            </Nav>
            <Nav>
              <Nav.Link href={product.url} target="_blank">{product.url}</Nav.Link>
            </Nav>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Breadcrumb>Price's History</Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table width="100%" striped bordered hover>
            <thead>
              <tr>
                <th>Price</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
            {product.prices.map((price, index) =>(
                <tr key={index}>
                  <td><NumberFormat value={price.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></td>
                  <td>
                    <Moment locale="id">
                      {price.at}
                    </Moment>
                  </td>
                </tr>
            ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;