import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

function App(){  
  return (
    <Router>
    <div className="app">
      <Container>
        <Row>
          <Col>
            <Header />
            <Route path="/" exact component={ProductForm} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/products/:id" component={ProductDetail} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
    </Router>
  )
}

export default App;