import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import './donate.css';

export default class Donate extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }


    renderHeader() {
        return(
            <div className="header">
                <h1>DONATE</h1>
            </div>
        );
    }

    renderNameAndDOB() {
        return(
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        required
                        error={this.state.errors.nameError}
                        id="name"
                        placeholder="First/Last"
                        label="Legal Name"
                        value={this.state.name}
                        onChange={this.handleFieldChange("name")}
                        onBlur={this.validateOnBlur("name")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                        error={this.state.errors.emailError}
                        required
                        id="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleFieldChange("email")}
                        onBlur={this.validateOnBlur("email")}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderEmails() {
        return(
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                        error={this.state.errors.emailError}
                        required
                        id="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleFieldChange("email")}
                        onBlur={this.validateOnBlur("email")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                        required
                        error={this.state.errors.confirmEmailError}
                        id="confirm-email"
                        label="Confirm Email"
                        value={this.state.confirmEmail}
                        onChange={this.handleFieldChange("confirmEmail")}
                        onBlur={this.validateOnBlur("confirmEmail")}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }


    render() {
        return;
    }
}
