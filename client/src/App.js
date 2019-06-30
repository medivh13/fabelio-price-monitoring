import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App(){  
  return (
    <Router>
    <div className="app">
      <Header />
        <Route path="/" exact component={ProductForm} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} />
      <Footer />
      </div>
    </Router>
  )
}




export default App;