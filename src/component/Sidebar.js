import React from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function MenuItem(props) {
    return (
        <Link to={props.url} className="nav-link active">{props.title}</Link>
    )
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: []
        }
    }

    recordTopics(data, response) {
        this.setState({ topics: data });
    }

    componentDidMount() {
        client.methods.getTopics(this.recordTopics.bind(this))
    }

    render() {
        return (
            <div className="nav flex-column position-fixed">
                <div className="row my-5"></div>
                <div className="row my-5"></div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <nav className="col-md-12">
                        <MenuItem url="/" title="Home" />
                        {
                            this.state.topics.map((value) => {
                                return <MenuItem url="#" title={value.Title} key={value.id}/>
                            })
                        }
                        <MenuItem url="/blog" title="Blog" />
                    </nav>
                </div>
            </div>
        )
    }
}

export default Sidebar;
