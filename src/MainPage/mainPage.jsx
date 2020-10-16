import React, { Component } from 'react'
import './mainPage.css'
import landingPhoto from './landingPhoto.jpg'

class mainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderLandingPhoto() {
        return (
            <div className="header-overlay">
                <img src={landingPhoto} alt="" />
            </div>
        )
    }

    renderLandingPage() {
        const landingPhoto = this.renderLandingPhoto();

        return(
            <div>
               {landingPhoto}
            </div>
            
        );

    }

    render() {
        const landingPage = this.renderLandingPage();

        return (
            <React.Fragment>
                {landingPage}
            </React.Fragment>
        )
    }
}

export default mainPage

