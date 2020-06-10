import React, { useState } from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';


function Link(link, key) {
    return (
      <li><a href={link.link.url}>{ link.link.Name }</a></li>
    )
  }

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInformation: null,
            bio: null
        }
    }

    recordContactInformation(data, response) {
        this.setState((state, props) => ({ contactInformation: data }));
        console.log(data)
    }

    recordBio(data, response) {
        this.setState((state, props) => ({ bio: data }));
    }

    componentDidMount() {
        client.methods.getContactInformation(this.recordContactInformation.bind(this));
        client.methods.getBio(this.recordBio.bind(this));
    }

    render() {
        // debugger
        return (
            <div className="col-md-4">
                <h3>About Me</h3>
                <p>
                    { this.state.bio && this.state.bio.Content }
                </p>
                <h3>Contact Information</h3>
                <ul>
                    <li>{ this.state.contactInformation && this.state.contactInformation.Email }</li>
                    <li>{ this.state.contactInformation && this.state.contactInformation.Phone }</li>
                </ul>
                <h3>Links</h3>
                <ul>
                    { this.state.contactInformation && 
                        this.state.contactInformation.links.map((value) => {
                                return <Link link={ value } key={ value.Name } />
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Sidebar;