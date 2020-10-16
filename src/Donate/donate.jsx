import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from '../NavBar/navBar'
import DonateForm from './donateForm'
import './donate.css';
import {states, regex} from '../Apply/applyConstants';
import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51HYxOjFtYKWdDatMBEIEBborDzK1X16uzDG6Bo05T00rUGHe1P');

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


    render() {
        const header = this.renderHeader();

        return(
            <React.Fragment>
                <NavBar history={this.props.history}/>
                {header}
                <Elements stripe={stripePromise}>
                    <InjectedCheckoutForm />
                </Elements>
            </React.Fragment>
        )
    }
}

const InjectedCheckoutForm = () => {
    return (
      <ElementsConsumer>
        {({elements, stripe}) => (
          <DonateForm elements={elements} stripe={stripe} />
        )}
      </ElementsConsumer>
    );
  };
