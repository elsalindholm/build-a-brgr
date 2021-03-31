import React from 'react';
import { MenuItemComp } from './MenuItemComp';

import { fries, sweetPotatoFries, houseSlaw, kimchiFries } from '../../MenuItems';

import './sides.scss';

export class SidesPage extends React.PureComponent {
  public render() {
    return (
      <div className={'sides-page'}>
        <div className={'sides-page-title'}>Sides</div>
        <div className={'sides-page-blurb'}>Choose your sides!</div>
        <div className={'sides-display'}>
          <MenuItemComp menuItem={fries} />
          <MenuItemComp menuItem={sweetPotatoFries} />
          <MenuItemComp menuItem={houseSlaw} />
          <MenuItemComp menuItem={kimchiFries} />
        </div>
      </div>
    );
  }
}
