import React from 'react';

import './burgers.scss';

export class BurgersPage extends React.PureComponent {
  public render() {
    return (
      <div className={'burgers-page'}>
        <div className={'title'}>Burgers</div>
        <div className={'blurb'}>Ready, set ...... BUILD!</div>
        <div className={'price'}>Price £11.50</div>
        <div className={'burger-builder'}>
          <div className={'ingredients-display'}>
            Ingredients will be displayed here
            <div className={'ingredients'}>Buns</div>
            <div className={'ingredients'}>Patties</div>
            <div className={'ingredients'}>Cheese</div>
            <div className={'ingredients'}>Sauces</div>
            <div className={'ingredients'}>Toppings</div>
          </div>
          <div className={'burger-cart'}>
            <div className={'bg-header'}>
              <div>BRGR BUILDER</div>
              <button>Clear</button>
            </div>
            <div className={'bg-items'}>Items</div>
            <div className={'bg-footer'}>
              <div>Total £</div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
