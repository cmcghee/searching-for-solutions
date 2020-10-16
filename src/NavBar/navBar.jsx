import { AppBar, Toolbar, Button } from '@material-ui/core';
import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './navBar.css';
import logo from './logo.png';

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
        this.handleClose();
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
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    renderAppBar() {
        const navComponents = this.renderNavComponents();
        return (
            <AppBar style={{backgroundColor:'white', boxShadow: 'none'}}>
                {navComponents}
            </AppBar>
        );
    }

    renderNavComponents() {
        if (window.innerWidth <= 1024) {
            return(
            <div>
                <Toolbar>
                    <img src={logo} alt="" className="logo" onClick={() => this.handleRedirect('/')}/>
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
                    <MenuItem className="menuSelection" onClick={() => this.handleScrollToElement("aboutus")}>About Us</MenuItem>
                    <MenuItem className="menuSelection" onClick={() => this.handleScrollToElement("ourteam")}>Our Team</MenuItem>
                    <MenuItem className="menuSelection" onClick={() => this.handleRedirect('/luke-project')}>Luke Project</MenuItem>
                    <MenuItem className="menuSelection" onClick={() => this.handleRedirect('/donate')}>Donate</MenuItem>
                    <MenuItem className="menuSelection" onClick={() => this.handleRedirect('/apply')}>Apply</MenuItem>
                    </Menu>
                </Toolbar>
            </div>
            );
        }
        return (
            <Toolbar>
                <img src={logo} alt="" className="logo" onClick={() => this.handleRedirect('/')}/>
                <Button color="inherit" className="leftSideButtons navBarButtons" onClick={() => this.handleScrollToElement("aboutus")}>About Us</Button>
                <Button color="inherit" className="navBarButtons" onClick={() => this.handleScrollToElement("ourteam")}>Our Team</Button>
                <Button color="inherit" className="navBarButtons" onClick={() => this.handleRedirect('/luke-project')}>Luke Project</Button>
                <Button color="inherit" className="navBarButtons" onClick={() => this.handleRedirect('/donate')}>Donate</Button>
                <Button color="inherit" className="navBarButtons" onClick={() => this.handleRedirect('/apply')}>Apply</Button>
            </Toolbar>
        );
    }

    render() {
        const appBar = this.renderAppBar();

        return (
           <React.Fragment>
               {appBar}
           </React.Fragment> 
        )
    }
}

export default navBar
