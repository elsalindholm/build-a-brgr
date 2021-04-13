import React from 'react';

import './footer.scss';

export class Footer extends React.PureComponent {
  public render() {
    return (
      <div className={'footer-container'}>
        <div className={'footer-section'}>
          <div className={'footer-item'}>Follow us on social media:</div>
          <div className={'footer-item'}>Instagram</div>
          <div className={'footer-item'}>Facebook</div>
        </div>
        <div className={'footer-section'}>
          <div className={'footer-item'}>Contact Us</div>
          <div className={'footer-item'}>FAQs</div>
          <div className={'footer-item'}>Delivery Information</div>
        </div>
        <div className={'footer-section'}>
          <div className={'footer-item'}>Where to Find Us:</div>
          <div className={'footer-item'}>Falkirk</div>
          <div className={'footer-item'}>Larbert</div>
        </div>
      </div>
    );
  }
}
