import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Post(post, key) {
    return (
  
      <div>
        <div>
          <h2>{ post.post.Title }</h2>
        </div>
        <div className="text-justify">
          { post.post.Content }
        </div>
      </div>
    )
  }

export default Post;