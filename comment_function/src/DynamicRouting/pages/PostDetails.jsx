import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function PostDetails() {
    const {id} = useParams();
    console.log(id);

    const location = useLocation();
    const {data} = location.state || {};
    console.log("this is data of postDetails ",data);

  return (
    <div>
        hello dynamic react router {id.postDetails}

          <h1>{data.title}</h1>
          <h5>{data.body}</h5>
          <p>{data.id}</p>
    </div>
  )
}

export default PostDetails
