import React, { Component } from 'react'
import MainPage from '../MainPage/mainPage';
import NavBar from '../NavBar/navBar';
import About from '../About/about';

class homePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavBar history={this.props.history}/>
                <MainPage/>
                <About />
            </React.Fragment>
        )
    }
}

export default homePage
