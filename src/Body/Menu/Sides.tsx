import React from 'react';
import './sides.scss';

export class SidesPage extends React.PureComponent {
  public render() {
    return (
      <div className={'sides-page'}>
        <div className={'sides-page-title'}>Sides</div>
        <div className={'sides-page-blurb'}>Choose your sides!</div>
        <div>Sides will be displayed here</div>
      </div>
    );
  }
}
