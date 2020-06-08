import React from 'react';
import logo from './logo.svg';
import './App.css';
import client from './api/client';



let responseLogger = function (data, response) {
  // console.log(data)
  // console.log(response)
}

// let recordBlogPosts = function (data, response){
//   state.blogPosts = response
// }

// client.methods.getBlogPosts(recordBlogPosts);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Blog />
      </header>
    </div>
  );
}

function Post(post, key) {
  return (<li key={key}>{post.post.Content}</li>)
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
      <ul>
        {this.state.posts.map((value) => {return <Post post={value} key={value.id}/>})}
      </ul>
    )
  }
}

export default App;
