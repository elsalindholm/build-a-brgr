import React from 'react';
import './header.scss';

export class Header extends React.PureComponent {
  render() {
    return (
      <div className={'header-container'}>
        <div className={'logo-container'}>
          <div>
            <h2>Build-A-BRGR</h2>
          </div>
        </div>
        <div className={'nb-button-container'}>
          <div>
            <button>Home</button>
          </div>
          <div>
            <button>Menu</button>
          </div>
          <div>
            <button>About</button>
          </div>
        </div>
        <div className={'cart-container'}>
          <div className={'cart-img-container'}></div>
        </div>
      </div>
    );
  }
}
