import React from 'react';

import './op-header.scss';

export class OPHeader extends React.PureComponent {
  public render() {
    return (
      <div className={'op-header'}>
        <div className={'oph-logo'}>Build-A-BRGR</div>
        <div className={'oph-title-container'}>
          <div className={'oph-title'}>CART</div>
          <div className={'oph-cart'}></div>
        </div>
      </div>
    );
  }
}
