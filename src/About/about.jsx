import React, { Component } from 'react'
import timelapse from '../MainPage/dctimelapse.mp4';
import "./about.css"

class about extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderHeader() {
        return(
            <div className="aboutHeader">
                <h1>WHAT WE STAND FOR</h1>
                <p>As a family, we make thoughtful decisions for our community, customers and planet. We have 5 Core Values that we live by: Be the Best, Deliver on Promises, Be Better Together, Stay Authentic, and Spread Good Vibes. </p>
            </div>
        );
    }

    renderAboutUsVideo() {
        return (
            <div className="videoContainer">
                <video className="video">
                    <source src={timelapse} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>  
            </div>
        )
    }

    renderOurTeamBoardHeader() {
        return(
            <div className="aboutHeader">
                <h1>OUR BOARD MEMBERS</h1>
                <p>As a family, we make thoughtful decisions for our community, customers and planet. We have 5 Core Values that we live by: Be the Best, Deliver on Promises, Be Better Together, Stay Authentic, and Spread Good Vibes. </p>
            </div>
        );
    }

    renderOurTeamExecHeader() {

        return(
            <div className="aboutHeader">
                <h1>OUR EXECUTIVE TEAM</h1>
                <p>As a family, we make thoughtful decisions for our community, customers and planet. We have 5 Core Values that we live by: Be the Best, Deliver on Promises, Be Better Together, Stay Authentic, and Spread Good Vibes. </p>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();
        const aboutUsVideo = this.renderAboutUsVideo();
        const ourTeamBoardHeader = this.renderOurTeamBoardHeader();
        const ourTeamExecHeader = this.renderOurTeamExecHeader();

        return (
            <React.Fragment>
                {header},
                {aboutUsVideo},
                {ourTeamBoardHeader},
                {ourTeamExecHeader}

            </React.Fragment>
        );
    }
}

export default about
