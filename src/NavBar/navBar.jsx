import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import React, { Component } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './navBar.css';

class navBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    handleScrollToElement(element) {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true
          })
    }

    handleRedirect(url) {
        this.props.history.push(url)
    }

    renderAppBar() {
        return (
            <AppBar style={{backgroundColor:'#a9a9a9', boxShadow: 'none'}}>
            <Toolbar>
                <Button color="inherit">LOGO GOES HERE</Button>
                <Button color="inherit" className="leftSideButtons" onClick={() => this.handleScrollToElement("aboutus")}>About Us</Button>
                <Button color="inherit" onClick={() => this.handleScrollToElement("ourteam")}>Our Team</Button>
                <Button color="inherit" onClick={() => this.handleRedirect('/luke-project')}>Luke Project</Button>
                <Button color="inherit" onClick={() => this.handleRedirect('/donate')}>Donate</Button>
                <Button color="inherit" onClick={() => this.handleRedirect('/apply')}>Contact</Button>
            </Toolbar>
            </AppBar>
        );
    }

    renderGridAppBar() {
        const appBar = this.renderAppBar();

        return (
            <Grid>
                {appBar}
            </Grid>
        );
    }

    render() {
        const appBar = this.renderGridAppBar();

        return (
           <React.Fragment>
               {appBar}
           </React.Fragment> 
        )
    }
}

export default navBar
