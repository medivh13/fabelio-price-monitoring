import React, { useEffect } from 'react'
import useProductState from '../states/useProductState';
import { Link } from 'react-router-dom';

function ProductList(){
  const { fetchProducts, products } = useProductState([]);

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

return (
  <div>
  <h2 className="title">Page 2 - Product List</h2>
  <table width="100%">
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
          {product.prices[product.prices.length-1].price}
        </td>
        <td>
          <Link to={`/products/${product._id}`}>Product Detail</Link>      
        </td>
      </tr>
    ))}
    </tbody>
  
  </table>
  
  </div>
  
)
}

export default ProductList;