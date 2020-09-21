import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import React, { Component } from 'react'
import './navBar.css';

class navBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderAppBar() {
        return (
            <AppBar style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <Button color="inherit">LOGO GOES HERE</Button>
                <Button color="inherit" className="leftSideButtons">About Us</Button>
                <Button color="inherit">Our Team</Button>
                <Button color="inherit">Luke Project</Button>
                <Button color="inherit">Donate</Button>
                <Button color="inherit">Contact</Button>
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
