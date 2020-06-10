import React, { useState } from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Post'
import Sidebar from './Sidebar';

class Blog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      }
    }
  
    recordBlogPosts(data, response) {
      this.setState({ posts: data });
    }
  
    record = (data, response) => {
      this.recordBlogPosts(data, response)
    }
  
    componentDidMount() {
      client.methods.getBlogPosts(this.record);
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      return true
    }
  
    render() {
      return (
        <div className="row">
          <div className="col-md-8">
            { this.state.posts.map((value) => {
              return <Post post={ value } key={ value.id }/>
            }) }
          </div>
            <Sidebar />
        </div>
      )
    }
  }

export default Blog;