import { useState } from 'react';
import useProductState from './useProductState';

export default (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const { addProduct } = useProductState([]);
    
    const handleSubmit = async e => {
    e.preventDefault();
    if(!value) return;
    await addProduct(value);
    setValue('');
}

    const onChange = e => {
        setValue(e.target.value);
    };

    return {
        value,
        handleSubmit,
        onChange
    }
}