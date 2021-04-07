import { observer } from 'mobx-react';
import React from 'react';

@observer
export class BurgerCart extends React.PureComponent {
  public render() {
    return (
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
    );
  }
}
