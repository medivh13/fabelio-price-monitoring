import React, { useEffect } from 'react'
import useCommentState from '../states/useCommentState';
import Comment from './Comment';
import CommentForm from './CommentForm';

function CommentList({ productId }){
  const { comments, fetchComments, voteComment, setComments  } = useCommentState([]);

  useEffect(() => {
    ( async () => {
      const res = await fetchComments(productId);
      setComments(res)
    })()
      
  }, [fetchComments, productId, setComments])

return (
  <div>
  <CommentForm productId={productId} />
    { comments.map((comment, index) => (
      <Comment key={index} data={comment} voteComment={voteComment} />
    ))}
  </div>
  
)
}

export default CommentList;