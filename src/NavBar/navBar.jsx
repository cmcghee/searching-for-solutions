import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './navBar.css';
import logo from './logo.png'

class navBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isTop: true,
            anchorEl: null
        }
    }

    handleScrollToElement(element) {
        this.handleRedirect('/')
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true
          })
    }

    handleRedirect(url) {
        this.props.history.push(url)
    }

    handleClose = () => {
        this.setState({anchorEl: null})
    };

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
    };

    resize = () => this.forceUpdate()

    componentDidMount() {
        window.addEventListener('resize', this.resize)
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
          });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    renderAppBar() {
        const navComponents = this.renderNavComponents();

        if (this.state.isTop) {
            return (
            <AppBar style={{background: 'transparent', boxShadow: 'none'}}>
                {navComponents}
            </AppBar>
        )
        }
        return (
            <AppBar style={{backgroundColor:'#a9a9a9', boxShadow: 'none'}}>
                {navComponents}
            </AppBar>
        );
    }

    renderNavComponents() {
        if (window.innerWidth <= 1024) {
            return(
            <div>
                <Toolbar>
                    <img src={logo} alt="" className="logo"/>
                    <Button aria-controls="simple-menu" aria-haspopup="true" className="leftSideButtons menuButton" onClick={this.handleClick}>
                        Menu
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                    >
                    <MenuItem className="menuSelection" onClick={this.handleClose}>About Us</MenuItem>
                    <MenuItem className="menuSelection" onClick={this.handleClose}>Our Team</MenuItem>
                    <MenuItem className="menuSelection" onClick={this.handleClose}>Luke Project</MenuItem>
                    <MenuItem className="menuSelection" onClick={this.handleClose}>Donate</MenuItem>
                    <MenuItem className="menuSelection" onClick={this.handleClose}>Apply</MenuItem>
                    </Menu>
                </Toolbar>
            </div>
            );
        }
        return (
            <Toolbar>
                <img src={logo} alt="" className="logo"/>
                <Button color="inherit" className="leftSideButtons" onClick={() => this.handleScrollToElement("aboutus")}>About Us</Button>
                <Button color="inherit" onClick={() => this.handleScrollToElement("ourteam")}>Our Team</Button>
                <Button color="inherit" onClick={() => this.handleRedirect('/luke-project')}>Luke Project</Button>
                <Button color="inherit" onClick={() => this.handleRedirect('/donate')}>Donate</Button>
                <Button color="inherit" onClick={() => this.handleRedirect('/apply')}>Apply</Button>
            </Toolbar>
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
