import React from 'react';
import { AppState } from '../AppState';
import { CartSummary } from './CartSummary';
import { OPHeader } from './OPHeader';

import './order-page.scss';

interface OPProps {
  appState: AppState;
}

export class OrderPage extends React.PureComponent<OPProps> {
  public render() {
    const { appState } = this.props;

    return (
      <div className={'order-page'}>
        <OPHeader />
        <div className={'order-page-holder'}>
          <CartSummary appState={appState} />
        </div>
      </div>
    );
  }
}
