import React from 'react';
import useCommentInputState from '../states/useCommentInputState';

function CommentForm({ productId }) {
  const { name, body, handleSubmit, onChangeName, onChangeBody } = useCommentInputState('', productId);
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name}
      onChange={onChangeName}
      placeholder="Name"
      required
      />
      <input type="text" value={body}
      onChange={onChangeBody}
      placeholder="Comment"
      required
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default CommentForm;