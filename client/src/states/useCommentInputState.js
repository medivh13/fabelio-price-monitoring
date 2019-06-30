import { useState } from 'react';
import useCommentState from './useCommentState';

export default (initialValue, productId) => {
    const [name, setName] = useState(initialValue);
    const [body, setBody] = useState(initialValue);
    const { addComment } = useCommentState([]);
    
    const handleSubmit = async e => {
    e.preventDefault();
    if(!name || !body) return;
    await addComment(name, body, productId);
    setName('');
    setBody('');
}

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeBody = e => {
        setBody(e.target.value);
    };

    return {
        name,
        body,
        handleSubmit,
        onChangeName,
        onChangeBody
    }
}