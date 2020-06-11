import React from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function formatDate(rawDate) {
    let publishedDate = new Date(rawDate);
    let dateFormat = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "2-digit" });

    return dateFormat.format(publishedDate);
}

function PostSummary(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm text-left">
                    <h2><Link to={`/posts/${props.post.id}`}>{ props.post.Title }</Link></h2>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm text-left text-muted">
                    { props.post.Author }
                </div>
                <div className="col-sm text-right text-muted">
                    { formatDate(props.post.Published) }
                </div>
            </div>
            <hr/>
            <div className="text-justify">
                { props.post.Content }
            </div>
            <div className="my-5"></div>
        </div>
    )
}

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    recordBlogPosts(data, response) {
        this.setState({ posts: data });
    }

        componentDidMount() {
        client.methods.getBlogPosts(this.recordBlogPosts.bind(this));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    render() {
        return (
                <div>
                    { this.state.posts.map((value) => {
                        return <PostSummary post={ value } key={ value.id }/>
                    }) }
                </div>
        )
    }
}

export default Feed;
