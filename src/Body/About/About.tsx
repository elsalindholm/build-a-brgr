import React from 'react';
import './about.scss';

export class About extends React.PureComponent {
  public render() {
    return (
      <div className={'about-page'}>
        <div className={'about-title'}>About Build-A-BRGR</div>
        <div className={'about-blurb-container'}>
          <img src={'/Assets/burger.png'} />
          <p>
            We are passionate about sharing our love of burgers with you and bringing the best
            burgers to you!
          </p>
        </div>
        <div className={'about-blurb-container'}>
          <p>
            We opened our first shop in Falkirk in 2019. We have since opened a new shop in Larbert
            in 2020 and we are hoping to expand further across the Central Belt and into Glasgow and
            Edinburgh.
          </p>
        </div>
        <div className={'sustainability-info'}>
          <div className={'sustainability-info-title'}>Sustainability</div>
          <div className={'sustainability-info-blurb'}>
            We are passionate about sustainability and constantly looking into ways to minimise our
            environmental impact.
          </div>
          <div className={'sustainability-info-blurb'}>
            Currently we:
            <div className={'sustainability-info-list'}>
              <ul>
                <li>source our ingredients locally whenever possible</li>
                <li>pay our staff living wage</li>
                <li>continuously look into ways to improve our packaging to create less waste</li>
                <li>
                  look into innovative and delicious ways to get more people excited about
                  plant-based food
                </li>
                <li>we offset our carbon footprint through our partner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
