import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import './donate.css';
import Button from '@material-ui/core/Button';
import {states, regex} from '../Apply/applyConstants';
import {CardElement} from '@stripe/react-stripe-js';
import axios from "axios";

export default class Donateform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
            creditCardDate: '',
            errors: {
                nameError: false,
                emailError: false,
                address1Error: false,
                address2Error: false,
                cityError: false,
                stateError: false,
                zipError: false,
            },
            proccessing: false,
            amount: 0
        }
    }

    handleFieldChange = field => (e) => {
        this.setState({[field]: e.target.value})
    }

    validateOnBlur = field => e => {
        const { nameRegex, emailRegex, addressRegex, onlyNumbersRegex } = regex;
        let errors = this.state.errors;

        switch (field) {
            case 'name':
                this.setState({ errors: { ...errors, nameError: !nameRegex.test(e.target.value) } });
                break;
            case 'email':
                this.setState({ errors: { ...errors, emailError: !emailRegex.test(e.target.value) } });
                break;
            case 'address1':
                this.setState({ errors: { ...errors, address1Error: !addressRegex.test(e.target.value) } });
                break;
            case 'city':
                this.setState({ errors: { ...errors, cityError: !nameRegex.test(e.target.value) } });
                break;
            case 'state':
                this.setState({ errors: { ...errors, stateError: this.state.state === '' } });
                break;
            case 'zip':
                this.setState({ errors: { ...errors, zipError: !onlyNumbersRegex.test(e.target.value) } });
                break;    
            default: 
                break;
        }
    }

    handleFormSubmit = async ev => {
        ev.preventDefault();

        const billingDetails = {
          name: this.state.name,
          email: this.state.email,
          address: {
            city: this.state.city,
            line1: this.state.address1,
            state: this.state.state,
            postal_code: this.state.zip
          }
        };

        const {stripe, elements} = this.props;
    
        const cardElement = elements.getElement("card");
    
        try {
          const { data: clientSecret } = await axios.post("http://localhost:3000/api/payment_intents", {
            amount: this.state.amount * 100
          });

          console.log(clientSecret)
    
          const paymentMethodReq = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: billingDetails
          });

          if (paymentMethodReq.error) {
            this.setState({proccessing: false})
            return;
          }
    
          const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethodReq.paymentMethod.id
          });
    
          if (error) {
            this.setState({proccessing: false})
            return;
          }
    
          console.log("onSuccesfulCheckout")
        } catch (err) {
          console.log(err)
        }
      };
    

    renderNameAndEmail() {
        return(
            <Grid container spacing={2} className="donateField">
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
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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

    renderAddress1() {
        return (
            <Grid container spacing={2} className="donateField">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        required
                        error={this.state.errors.address1Error}
                        id="address1"
                        label="Address Line 1"
                        value={this.state.address1}
                        onChange={this.handleFieldChange("address1")}
                        onBlur={this.validateOnBlur('address1')}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderAddress2() {
        return (
            <Grid container spacing={2} className="donateField">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        id="address2"
                        label="Address Line 2"
                        value={this.state.address2}
                        onChange={this.handleFieldChange("address2")}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderCityStateZip(){
        const stateMenu = states.map(state => <MenuItem value={state} key={state}>{state}</MenuItem>)

        return (
            <Grid container spacing={2} className="donateField">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                            required
                            error={this.state.errors.cityError}
                            id="City"
                            label="City"
                            value={this.state.city}
                            onChange={this.handleFieldChange("city")}
                            onBlur={this.validateOnBlur('city')}
                            fullWidth
                        />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                        <Select
                            fullWidth
                            required
                            error={this.state.errors.stateError}
                            id="state"
                            value={this.state.state}
                            onChange={this.handleFieldChange('state')}
                            onBlur={this.validateOnBlur('state')}
                        >
                            {stateMenu}
                        </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        required
                        error={this.state.errors.zipError}
                        id="zip"
                        label="Zip Code"
                        value={this.state.zip}
                        onChange={this.handleFieldChange("zip")}
                        onBlur={this.validateOnBlur('zip')}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderCreditCardInfo() {
        return(
            <Grid container spacing={2} className="donateField">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <CardElement
                    options={{
                        style: {
                        base: {
                            fontSize: '16px',
                            color: 'red',
                            '::placeholder': {
                            color: '#red',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                        },
                    }}
                    />
            </Grid>
        </Grid>
        )
    }

    renderSubmit() {
        return(
            <div className="buttonContainer">
                <Button variant="contained" type="submit">
                    Pay
                </Button>
            </div>
        )
    }

    render() {
        const nameAndEmail = this.renderNameAndEmail();
        const address1 = this.renderAddress1();
        const address2 = this.renderAddress2()
        const citystatezip = this.renderCityStateZip();
        const creditCardInfo = this.renderCreditCardInfo();
        const submit = this.renderSubmit();

        return (
            <React.Fragment>
                <form onSubmit={this.handleFormSubmit}>
                    {nameAndEmail}
                    {address1}
                    {address2}
                    {citystatezip}
                    {creditCardInfo}
                    {submit}
                </form>
            </React.Fragment>
        )
    }
}