import React from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';


function Link(props) {
    return (
      <li><a href={props.link.url}>{ props.link.Name }</a></li>
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
        this.setState({ contactInformation: data });
    }

    recordBio(data, response) {
        this.setState({ bio: data });
    }

    componentDidMount() {
        client.methods.getContactInformation(this.recordContactInformation.bind(this));
        client.methods.getBio(this.recordBio.bind(this));
    }

    render() {
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
