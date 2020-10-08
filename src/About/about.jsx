import React, { Component } from 'react'
import {ABOUT_US_PARAGRAPHS , MISSION_STATEMENTS} from './aboutConstants';
import "./about.css"
import ResponsivePlayer from '../ReactPlayer/reactPlayer';
import TeamMembers from '../TeamMembers/teamMembers'
import Grid from '@material-ui/core/Grid'
import stock1 from './stock1.jpg'
import stock2 from './stock2.jpg'
import stock3 from './stock3.jpg'

class about extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    resize = () => this.forceUpdate()

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    renderHeader() {
        const { main1, main2 } = ABOUT_US_PARAGRAPHS;

        return(
            <div className="aboutHeader vertical-offset" name="aboutus">
                <h1>OUR MISSION</h1>
                <p>{main1}</p>
                <p>{main2}</p>
            </div>
        );
    }

    renderAboutUsVideo() {
        return <ResponsivePlayer />

    }

    renderMissionStatements() {
        const { theDream, standFor, ourCommunity } = MISSION_STATEMENTS;
        const theDream1 = window.innerWidth >= 960 ? <div className="missionHeader" name="aboutus"><h1>THE DREAM</h1><p>{theDream}</p></div> : <div className="fill"><img src={stock2} alt="" className="img"/></div>
        const theDream2 =  window.innerWidth >= 960 ? <div className="fill"><img src={stock2} alt="" className="img"/></div> : <div className="missionHeader " name="aboutus"><h1>THE DREAM</h1><p>{theDream}</p></div>

        return (
            <React.Fragment>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="fill vertical-offset">
                            <img src={stock1} alt="" className="img"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="missionHeader " name="aboutus">
                        <h1>WHAT WE STAND FOR</h1>
                            <p>{standFor}</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        {theDream1}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        {theDream2}
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="fill">
                            <img src={stock3} alt="" className="img"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="missionHeader " name="aboutus">
                            <h1>OUR COMMUNITY</h1>
                                <p>{ourCommunity}</p>
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
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
        const missionStatements = this.renderMissionStatements();
        const ourTeamBoardHeader = this.renderOurTeamBoardHeader();
        const ourTeamExecHeader = this.renderOurTeamExecHeader();

        return (
            <React.Fragment>
                {header}
                {aboutUsVideo}
                {ourTeamBoardHeader}
                {ourTeamExecHeader}
                {missionStatements}
            </React.Fragment>
        );
    }
}

export default about
