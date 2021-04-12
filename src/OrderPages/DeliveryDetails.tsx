import React from 'react';
import { AppState, MenuPage, OrderPage, Page } from '../AppState';

import './delivery-details.scss';

export interface DDProps {
  appState: AppState;
}

export class DeliveryDetails extends React.PureComponent<DDProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'delivery-details'}>
        <div className={'op-breadcrumbs'}>
          <button onClick={() => appState.setCurrentPage(Page.HOME)}>Home</button>
          <p>{'>'}</p>
          <button onClick={() => appState.setCurrentOrderPage(OrderPage.CARTSUMMARY)}>
            Cart Summary
          </button>
          <p>{'>'}</p>
          <button>Delivery Details</button>
        </div>
        <form>
          <label>
            Name
            <input type='text' name='name' required />
          </label>
          <br></br>

          <label>
            Street Address
            <input type='text' name='address' required />
          </label>
          <br></br>

          <label>
            City
            <input type='text' name='city' required />
          </label>
          <br></br>

          <label>
            Postcode
            <input type='text' name='postcode' required />
          </label>
          <br></br>

          <label>
            Email Address
            <input type='text' name='email' required />
          </label>
          <br></br>

          <label>
            Phone Number
            <input type='number' name='phonenumber' required />
          </label>
          <br></br>
          <br></br>
          <br></br>

          <button
            className={'proceed-to-payment'}
            onClick={() => appState.setCurrentOrderPage(OrderPage.PAYMENT)}
          >
            {' '}
            Proceed to Payment
          </button>
        </form>
      </div>
    );
  }
}
