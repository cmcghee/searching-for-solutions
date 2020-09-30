import React, { Component } from 'react'
import {ABOUT_US_PARAGRAPHS} from './aboutConstants';
import "./about.css"
import ResponsivePlayer from '../ReactPlayer/reactPlayer';
import TeamMembers from '../TeamMembers/teamMembers'

class about extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderHeader() {
        const { main1, main2 } = ABOUT_US_PARAGRAPHS;

        return(
            <div className="aboutHeader vertical-offset" name="aboutus">
                <h1>WHAT WE STAND FOR</h1>
                <p>{main1}</p>
                <p>{main2}</p>
            </div>
        );
    }

    renderAboutUsVideo() {
        return <ResponsivePlayer />

    }

    renderOurTeamBoardHeader() {
        return(
            <div className="aboutHeader" name="ourteam">
                <h1>OUR BOARD MEMBERS</h1>
                <TeamMembers type="boardMembers" />
            </div>
        );
    }

    renderOurTeamExecHeader() {

        return(
            <div className="aboutHeader">
                <h1>OUR EXECUTIVE TEAM</h1>
                <TeamMembers type="execMembers"/>
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
                {header}
                {aboutUsVideo}
                {ourTeamBoardHeader}
                {ourTeamExecHeader}

            </React.Fragment>
        );
    }
}

export default about
