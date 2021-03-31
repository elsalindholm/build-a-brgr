import React from 'react';

import './drinks.scss';

export class DrinksPage extends React.PureComponent {
  public render() {
    return (
      <div className={'drinks-page'}>
        <div className={'drinks-page-title'}>Drinks</div>
        <div className={'drinks-page-blurb'}>Choose your drinks!</div>
        <div>Drinks will be displayed here</div>
      </div>
    );
  }
}
