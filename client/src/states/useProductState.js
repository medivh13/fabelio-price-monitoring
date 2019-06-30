import  { useState } from 'react';

export default initialValue => {
    const [products, setProducts] = useState(initialValue);
    const [product, setProduct] = useState(initialValue);
    
      return {
        products,
        product,
        fetchProducts : async () => {
            const data = await fetch('/products/api')
            let res = await data.json()
            res.length ? setProducts(res) : setProducts([])
        },
        fetchProduct : async id => {
            const data = await fetch(`/products/api/${id}`)
            let res = await data.json();
            setProduct(res)
        }, 
        addProduct : async (url) => {
            const response = await fetch( '/products/api', {
            method: 'POST',
            body: JSON.stringify({ url }),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            const data = await response.json();
            if(response.status === 400){
                return alert(data.message)
            }
            window.location = "/products/" + data._id;
        }
      }
}