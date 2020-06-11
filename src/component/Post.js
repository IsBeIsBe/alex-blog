import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function formatDate(rawDate) {
    let publishedDate = new Date(rawDate);
    let dateFormat = new Intl.DateTimeFormat("en", {year: "numeric", month: "short", day: "2-digit"});

    return dateFormat.format(publishedDate);
}

function Post(post, key) {
    return (  
      <div>
        <div className="row">
        <div className="col-sm text-left">
          <h2>{ post.post.Title }</h2>
        </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-sm text-left text-muted">
                { post.post.Author }
            </div>
            <div className="col-sm text-right text-muted">
                { formatDate(post.post.Published) }
            </div>
        </div>
        <hr/>
        <div className="text-justify">
          { post.post.Content }
        </div>
      </div>
    )
  }

export default Post;