import React from 'react';
import useInputState from '../states/useInputState';

function ProductForm() {
  const { value, handleSubmit, onChange } = useInputState('');

  return (
    <div className="form">
    <h2 className="title">Page 1 - Product Link Submission</h2>
    <form onSubmit={handleSubmit}>
      <input className="product-input" type="text" value={value}
      onChange={onChange}
      placeholder="Product Link"
      required
      />
      <button className="submit-button" type="submit">Submit</button>
    </form>
    </div>
  )
}

export default ProductForm;