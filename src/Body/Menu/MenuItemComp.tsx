import React from 'react';
import { MenuItem } from '../../MenuItems';

import './menu-item-comp.scss';

interface MicProps {
  menuItem: MenuItem;
}

export class MenuItemComp extends React.PureComponent<MicProps> {
  render() {
    return (
      <div className={'menu-item'}>
        <div className={'img'}>Image</div>
        <div className={'name'}>{this.props.menuItem.name}</div>
        <div className={'dietary-info'}>
          {this.props.menuItem.vegetarian && <div className={'vegetarian'}>V</div>}
          {this.props.menuItem.vegan && <div className={'vegan'}>VG</div>}
        </div>
        <div className={'price'}>£ {this.props.menuItem.price}</div>
        <button className={'button'}>Add to cart</button>
      </div>
    );
  }
}
