import React from 'react';

const List = (props) => {
  const { blogposts } = props;
  if (blogposts.length === 0 || !blogposts) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {blogposts.map((blogpost) => {
        return (
          <li key={blogpost.id} className='list'>
            <span className='blogpost-contributor'>{blogpost.contributor} </span>
            <span className='blogpost-body'>{blogpost.body} </span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;