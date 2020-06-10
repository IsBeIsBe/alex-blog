import React, { useState } from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInformation: null,
            bio: null
        }
    }

    recordContactInformation(data, response) {
        this.setState({ bio: this.state.bio, contactInformation: data });
    }

    recordBio(data, response) {
        this.setState({ bio: data, contactInformation: this.state.contactInformation });
    }

    componentDidMount() {
        client.methods.getContactInformation(this.recordContactInformation.bind(this));
        client.methods.getBio(this.recordBio.bind(this));
    }

    render() {
        return (
            <div className="col-md-4">
                { this.state.bio && this.state.bio.Content }
            </div>
        )
    }
}

export default Sidebar;