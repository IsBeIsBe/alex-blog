import React from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';


function Link(props) {
    return (
        <li><a href={ props.link.url }>{ props.link.Name }</a></li>
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
            <div className="nav flex-column position-fixed">
                <div className="row my-5"></div>
                <div className="row my-5"></div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <nav className="col-md-12">
                        <a className="nav-link active" href="#">Blog</a>
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Sidebar;
