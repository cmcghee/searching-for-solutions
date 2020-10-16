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
            <div className="mainContentContainer">
                <div className="aboutHeader vertical-offset" name="aboutus">
                    <h1>OUR MISSION</h1>
                    <p>{main1}</p>
                    <p>{main2}</p>
                </div>
                <ResponsivePlayer />
            </div>
        );
    }

    renderMissionStatements() {
        const { theDream, standFor, ourCommunity } = MISSION_STATEMENTS;
        const theDream1 = window.innerWidth >= 960 ? <Grid item className="gridTextDream" xs={12} sm={12} md={6} lg={6} xl={6}><div className="missionHeader" name="aboutus"><h1>THE DREAM</h1><p>{theDream}</p></div></Grid> : <Grid item className="gridImg" xs={12} sm={12} md={6} lg={6} xl={6}><img src={stock2} alt="" className="img"/></Grid>
        const theDream2 =  window.innerWidth >= 960 ? <Grid item className="gridImg" xs={12} sm={12} md={6} lg={6} xl={6}><img src={stock2} alt="" className="img"/></Grid> : <Grid item className="gridTextDrean" xs={12} sm={12} md={6} lg={6} xl={6}><div className="missionHeader" name="aboutus"><h1>THE DREAM</h1><p>{theDream}</p></div></Grid>

        return (
            <React.Fragment>
                <Grid container className="vertical-offset noPadding" spacing={0}>
                    <Grid item className="gridImg" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={stock1} alt="" className="img"/>
                    </Grid>
                    <Grid item className="gridText" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="missionHeader greyBackground" name="aboutus">
                            <h1>WHAT WE STAND FOR</h1>
                            <p>{standFor}</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid container className="noPadding"spacing={0}>
                    {theDream1}
                    {theDream2}
                </Grid>
                <Grid container className="noPadding" spacing={0}>
                    <Grid item className="gridImg" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={stock3} alt="" className="img"/>
                    </Grid>
                    <Grid item className="gridText" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="missionHeader greyBackground" name="aboutus">
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
                <h3>Announcing members on November 1, 2020</h3>
            </div>
        );
    }

    renderOurTeamExecHeader() {

        return(
            <div className="aboutHeader vertical-offset">
                <h1>OUR EXECUTIVE TEAM</h1>
                <TeamMembers type="execMembers"/>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();
        const missionStatements = this.renderMissionStatements();
        const ourTeamBoardHeader = this.renderOurTeamBoardHeader();
        const ourTeamExecHeader = this.renderOurTeamExecHeader();

        return (
            <React.Fragment>
                {header}
                {missionStatements}
                {ourTeamExecHeader}
                {ourTeamBoardHeader}
            </React.Fragment>
        );
    }
}

export default about
