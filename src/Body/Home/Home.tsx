import React from 'react';

import './home.scss';

export class Home extends React.PureComponent {
  public render() {
    return (
      <div className={'home-page'}>
        <div className={'home-page-title'}>Welcome to Build-A-BRGR</div>
        <div className={'burger-image-container'}>
          <img src={'/Assets/burger.png'} />
        </div>
        <div className={'home-pg-blurb'}>
          Build a burger and get it delivered straight to your door!
        </div>
        <div className={'home-pg-blurb'}>
          We offer a wide range of patties, toppings and of course our delicious house sauces to
          suit various dietary requirements!
        </div>
        <div className={'home-pg-blurb-map'}>
          <div className={'map-image-container'}>
            <img src={'/Assets/map.png'} />
          </div>
          <div className={'map-blurb-container'}>
            We currently deliver within the Falkirk Council area. We are also looking into expanding
            into Edinburgh and Glasgow. Please follow us on social media to receive further updates
            on our plans to conquer the world (or at least Central Scotland).
          </div>
        </div>
      </div>
    );
  }
}
