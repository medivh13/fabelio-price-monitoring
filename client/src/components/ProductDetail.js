import React, { useEffect } from 'react';
import useProductState from '../states/useProductState';
import CommentList from './CommentList';
import Moment from 'react-moment';

function ProductDetail({ match }){
  const { fetchProduct, product } = useProductState({ prices: [{}], imgUrls: []});

  useEffect( () => {
    fetchProduct(match.params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
    <h2 className="title">Page 3 - Product Detail</h2>
    <h1>{product.name}</h1>
    <h3>Current Price:</h3>
    <p>{product.prices[0].price}</p>
    <h3>Description:</h3> 
    <div dangerouslySetInnerHTML={{__html: product.description}} />
    
    <h3>Images:</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
    {product.imgUrls.map( (url, index) => (
      <div key={index}>
        <img src={url} alt="Product Look" width="200px"/>
      </div>
      ))}
    </div>
    
    <h3>Link:</h3>
    <p><a target="_blank" rel="noopener noreferrer" href={product.url}>{product.url}</a></p>

    <h3>Price History:</h3>
    <table>
      <thead>
      <tr>
        <th>Price</th>
        <th>Time</th>
      </tr>
      </thead>
      <tbody>
        { product.prices.map((price, index) =>(
          <tr key={index}>
            <td>{price.price}</td>
            <td>
            <Moment locale="id">
              {price.at}
            </Moment>
            
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3>Comments</h3>
    
    <CommentList productId={match.params.id}/>
    </div>
  )
}

export default ProductDetail;