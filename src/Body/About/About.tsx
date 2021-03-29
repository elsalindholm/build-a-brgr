import React from 'react';
import './about.scss';

export class AboutPage extends React.PureComponent {
  render() {
    return (
      <div className={'about-page'}>
        <div className={'about-title'}>
          <h1>About Build-A-BRGR</h1>
        </div>
        <div className={'about-blurb'}></div>
        <div className={'about-blurb'}></div>
      </div>
    );
  }
}
