import React from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        }
    }

    retrieveHomepage(data, response) {
        console.log(data)
        this.setState({ content: data.Content })
    }

    componentDidMount() {
        client.methods.getHomepage(this.retrieveHomepage.bind(this))
    }

    render() {
        return (
            (
                <div>
                    <div className="row">
                        <div className="col-sm text-left">
                            <h2>Carousel GOES HERE</h2>
                        </div>
                    </div>
                    <hr/>
                    <div className="text-justify">
                        { this.state.content }
                    </div>
                </div>
            )
        )
    }
}

export default Homepage;
