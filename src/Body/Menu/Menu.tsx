import React from 'react';
import './menu.scss';

export class MenuPage extends React.PureComponent {
  render() {
    return (
      <div className={'menu-page'}>
        <div className={'menu-header'}>
          <div className={'menu-nb-button-container'}>
            <button className={'menu-nb-button'}>Burgers</button>
            <button className={'menu-nb-button'}>Sides</button>
            <button className={'menu-nb-button'}>Drinks</button>
          </div>
        </div>
        <div className={'menu-sub-page-container'}>Menu sub page will appear here</div>
      </div>
    );
  }
}
