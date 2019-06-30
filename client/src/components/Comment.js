import React from 'react'
import useCommentState from '../states/useCommentState';

function Comment({ data, voteComment }){
    const {comment, setComment} = useCommentState(data);

    const upVote = async (vote) => {
        const res = await voteComment(1, data._id);
        setComment(res)
    }

    const downVote = async (vote) => {
        const res = await voteComment(-1, data._id);
        setComment(res)
    }

return (
  <div>
    <p><strong>{comment.name}</strong></p>
    <p>{comment.body}</p>
    <button onClick={downVote}>Downvote </button> <span className="vote">({comment.vote})</span> <button onClick={upVote}>Upvote</button>
    <hr/>
  </div>
  
)
}

export default Comment;