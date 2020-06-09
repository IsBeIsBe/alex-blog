import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import client from './api/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="p-3">
      <div className="row">
        <Jumbotron className="text-center, col-md-12">
          <h1 className="header">Tunit's Mega Dragonball Z Blog</h1>
          <p>
            It's proper sick and that. Trust me just give it a read. Also, have you heard any liquid drum and bass,
            honestly I reckon you'll like this track.
          </p>
        </Jumbotron></div>
      <Blog/>
    </Container>
  );
}

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
        <div className="col-md-4">
          Sidebar
        </div>
      </div>
    )
  }
}

export default App;
