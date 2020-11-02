import React, { Component } from 'react'
import './donate.css';
import Button from '@material-ui/core/Button';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51HYxOjFtYKWdDatMBEIEBborDzK1X16uzDG6Bo05T00rUGHe1PXI85btx07DbH01gAWDFqUXoQzQTGjoVXxpoYw200Cfxx1ATr')

export default class Donateform extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        const response = await fetch('http://localhost:4242/create-checkout-session', { method: 'POST' });
    
        const session = await response.json();
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
    
        if (result.error) {
          console.log(result.error)
        }
      };

    renderSubmit() {
        return(
            <div className="buttonContainer" onClick={this.handleClick}>
                <Button variant="contained" type="submit">
                    Donate
                </Button>
            </div>
        )
    }

    render() {
        const submit = this.renderSubmit();

        return (
            <React.Fragment>
                {submit}
            </React.Fragment>
        )
    }
}