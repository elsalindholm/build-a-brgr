import React from 'react';

import './burgers.scss';

export class BurgersPage extends React.PureComponent {
  public render() {
    return (
      <div className={'burgers-page'}>
        <div className={'burgers-page-title'}>Burgers</div>
        <div className={'burgers-page-blurb'}>Ready, set ...... BUILD!</div>
        <div className={'burgers-page-price'}>Price £11.50</div>
        <div className={'burgers-page-ingredients'}>Ingredients will be displayed here</div>
      </div>
    );
  }
}
