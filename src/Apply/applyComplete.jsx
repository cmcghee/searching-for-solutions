import React, { Component } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './apply.css'

export default class Applycomplete extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderHeader() {
        return(
            <div className="header">
                <CheckCircleIcon className="checkIcon" />
                <div className="successHeader">SUCCESS</div>
                <div className="subHeader">We will review your application and get back to you soon.</div>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();
        return header;
    }
}
