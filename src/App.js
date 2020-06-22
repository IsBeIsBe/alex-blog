import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from './component/Feed.js';
import {
    Switch,
    Route,
    useParams, HashRouter as Router
} from "react-router-dom";
import Post from "./component/Post";
import Sidebar from "./component/Sidebar";

function Header() {
    return (
        <div className="row text-center">
            <Jumbotron className="text-center, col-md-12">
                <h1 className="header">Tunit's Mega Dragonball Z Blog</h1>
                <p>
                    It's proper sick and that. Trust me just give it a read. Also, have you heard any liquid drum
                    and bass,
                    honestly I reckon you'll like this track.
                </p>
            </Jumbotron>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="row">
                <div className="col-md-1 border-right">
                    <Sidebar/>
                </div>
                <div className="col-md-11">
                    <Header/>
                    <div className="row">
                        <Container>
                            <Switch>
                                <Route path="/posts/:postId">
                                    <PostView/>
                                </Route>
                                <Route path="/">
                                    <Feed/>
                                </Route>
                            </Switch>
                        </Container>
                    </div>
                </div>
            </div>
        </Router>
    );
}

function PostView() {
    let { postId } = useParams()
    return (
        <Post postId={ postId }/>
    )
}


export default App;
