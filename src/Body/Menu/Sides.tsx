import React from 'react';

import { MenuItemComp } from './MenuItemComp';
import { fries, sweetPotatoFries, houseSlaw, kimchiFries } from '../../MenuItems';
import { AppState } from '../../AppState';

import './sides.scss';

export interface SidesProps {
  appState: AppState;
}

export class SidesPage extends React.PureComponent<SidesProps> {
  public render() {
    return (
      <div className={'sides-page'}>
        <div className={'sides-page-title'}>Sides</div>
        <div className={'sides-page-blurb'}>What is a burger without a tasty side..</div>
        <div className={'sides-display'}>
          <MenuItemComp menuItem={fries} appState={this.props.appState} />
          <MenuItemComp menuItem={sweetPotatoFries} appState={this.props.appState} />
          <MenuItemComp menuItem={houseSlaw} appState={this.props.appState} />
          <MenuItemComp menuItem={kimchiFries} appState={this.props.appState} />
        </div>
      </div>
    );
  }
}
