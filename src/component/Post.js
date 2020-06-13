import React from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';

function formatDate(rawDate) {
    let publishedDate = new Date(rawDate);
    let dateFormat = new Intl.DateTimeFormat(
        "en",
        { year: "numeric", month: "short", day: "2-digit" }
    );

    return dateFormat.format(publishedDate);
}

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.postId,
            post: null
        }
    }

    retrieveBlogPost(data, response) {
        this.setState({ post: data })
    }

    componentDidMount() {
        let args = {
            path: { postId: this.state.postId }
        }
        client.methods.getBlogPost(args, this.retrieveBlogPost.bind(this))
    }

    render() {
        return (
            this.state.post && (
                <div>
                    <div className="row">
                        <div className="col-sm text-left">
                            <h2>{ this.state.post.Title }</h2>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm text-left text-muted">
                            { this.state.post.Author }
                        </div>
                        <div className="col-sm text-right text-muted">
                            { formatDate(this.state.post.Published) }
                        </div>
                    </div>
                    <hr/>
                    <div className="text-justify">
                        { this.state.post.Content }
                    </div>
                </div>
            )
        )
    }
}

export default Post;
