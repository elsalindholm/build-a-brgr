import { observer } from 'mobx-react';
import React from 'react';
import { AppState, MenuPage, OrderPage, Page } from '../AppState';
import { OrderState } from '../OrderState';

import './delivery-details.scss';

export interface DDProps {
  appState: AppState;
  orderState: OrderState;
}

@observer
export class DeliveryDetails extends React.PureComponent<DDProps> {
  render() {
    const { appState, orderState } = this.props;

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
            Name*
            <input
              type='text'
              name='name'
              required
              value={orderState.cName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                orderState.setCName(event.target.value)
              }
            />
          </label>
          <br></br>

          <label>
            Street Address*
            <input
              type='text'
              name='address'
              required
              value={orderState.cStAddress}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                orderState.setCStAddress(event.target.value)
              }
            />
          </label>
          <br></br>

          <label>
            City*
            <input
              type='text'
              name='city'
              required
              value={orderState.cCity}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                orderState.setCCity(event.target.value)
              }
            />
          </label>
          <br></br>

          <label>
            Postcode*
            <input
              type='text'
              name='postcode'
              required
              value={orderState.cPostcode}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                orderState.setCPostcode(event.target.value)
              }
            />
          </label>
          <br></br>

          <label>
            Email Address*
            <input
              type='text'
              name='email'
              required
              value={orderState.cEmail}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                orderState.setCEmail(event.target.value)
              }
            />
          </label>
          <br></br>

          <label>
            Phone Number*
            <input
              type='number'
              name='phonenumber'
              required
              value={orderState.cPhoneNum}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                orderState.setCPhoneNum(event.target.value)
              }
            />
          </label>
          <br></br>
          <br></br>
          <br></br>

          <button
            className={'order-pg-button'}
            disabled={orderState.deliveryButtonDisabled}
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
