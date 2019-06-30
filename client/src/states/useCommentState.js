import  { useState } from 'react';

export default initialValue => {
    const [comments, setComments] = useState(initialValue);
    const [comment, setComment] = useState(initialValue);

      return {
        comments,
        setComments,
        comment,
        setComment,
        fetchComments : async productId => {
          const res = await fetch(
            `/comments/api/${productId}`,
          );
          const datas = await res.json();
          return datas
        },
        fetchComment : async commentId => {
          const res = await fetch(
            `/comments/api/single/${commentId}`,
          );
          const data = await res.json();
          setComment(data);
        },
        addComment : async (name, body, productId) => {
            const res = await fetch( '/comments/api', {
              method: 'POST',
              body: JSON.stringify({ name, body, productId}),
              headers: {
                  'Content-Type': 'application/json'
              }
            })
            const data = await res.json();
            const newDatas= [data, ...comments]
            setComments(newDatas)
        },
        voteComment: async (vote, commentId) => {
          const res =  await fetch(`/comments/api/${commentId}` , {
            method: 'PUT',
            body: JSON.stringify({ vote }),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            const data = await res.json();
            return data;
        }
      }
}