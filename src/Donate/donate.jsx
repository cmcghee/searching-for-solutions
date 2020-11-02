import React, { Component } from 'react'
import NavBar from '../NavBar/navBar'
import DonateForm from './donateForm.jsx'
import './donate.css';

export default class Donate extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    renderHeader() {
        return(
            <div className="header">
                <h1>DONATE</h1>
            </div>
        );
    }


    render() {
        const header = this.renderHeader();

        return(
            <React.Fragment>
                <NavBar history={this.props.history}/>
                {header}
                <DonateForm />
            </React.Fragment>
        )
    }
}