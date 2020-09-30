import React, { Component } from 'react'
import './mainPage.css'
import timelapse from './dctimelapse.mp4';

class mainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderMainVideoContent() {
        return (
            <div className="fullscreen-video-wrap">
                <video id="background-video"  loop autoPlay muted >
                    <source src={timelapse} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>  
            </div>
            
        )
    }

    renderLandingPage() {
        const videoContent = this.renderMainVideoContent();

        return(
            <div>
               <header className="v-header container">
                {videoContent}
            <div className="header-overlay"></div>
            <div className="header-content vertical-center">
                <h1>searching for solutions</h1>
            </div>
            </header> 
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

