import React from 'react';
import '../App.css';
import client from '../api/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function MenuItem(props) {
    let subtopics = props.subtopics;
    
    return (
        subtopics ?
            <GroupMenuItem title={ props.title } subtopics={ subtopics } /> :
            <SingleMenuItem title={ props.title } url={ props.url } />
    )
}

function SingleMenuItem(props) {
    return (
        <Link to={props.url} className="nav-link active">{props.title}</Link>
    )
}

function GroupMenuItem(props) {
    return (

        <Accordion>
            <div>
                <div>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        { props.title }
                    </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="0">
                    <div>
                        {
                            props.subtopics.map((value) => {
                                return <SingleMenuItem url="#" title={ value.Title } key={ value.id } />
                            })
                        }
                    </div>
                </Accordion.Collapse>
            </div>
        </Accordion>
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
                                return <MenuItem url="#" title={ value.Title } key={ value.id } subtopics={ value.subtopics } />
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
