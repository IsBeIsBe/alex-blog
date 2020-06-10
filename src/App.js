import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import client from './api/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './component/Blog.js'
import Post from './component/Post.js'


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

export default App;
