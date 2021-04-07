import { observer } from 'mobx-react';
import React from 'react';

import './burger-cart.scss';
import { CartItem } from './CartItem';
import { CartState } from './CartState';
import { BurgerItem, MenuItem, ItemType } from './MenuItems';

interface BCProps {
  burgerState: CartState;
  addToCart: (menuItem: MenuItem) => void;
}

@observer
export class BurgerCart extends React.PureComponent<BCProps> {
  public render() {
    const { burgerState } = this.props;

    return (
      <div className={'burger-cart'}>
        <div className={'bg-header'}>
          <div>BRGR BUILDER</div>
          <button onClick={() => burgerState.clearCart()}>Clear</button>
        </div>
        <div className={'bg-items'}>{this.renderBurgerCartItems()}</div>
        <div className={'bg-footer'}>
          <div>Total £ {burgerState.totalPrice} </div>
          <button onClick={() => this.addBurgerToCart()}>Add to Cart</button>
        </div>
      </div>
    );
  }

  private renderBurgerCartItems() {
    const items: JSX.Element[] = [];

    this.props.burgerState.cartItems.forEach((item, idx) => {
      items.push(<CartItem cartItem={item} position={idx} cartState={this.props.burgerState} />);
    });
    return items;
  }

  private addBurgerToCart() {
    const { burgerState, addToCart } = this.props;

    let isVegetarian = true;
    let isVegan = true;
    burgerState.cartItems.forEach((item) => {
      if (!item.vegetarian) {
        isVegetarian = false;
      }

      if (!item.vegan) {
        isVegan = false;
      }
    });

    const newBurger: BurgerItem = {
      name: 'Burger',
      price: burgerState.totalPrice,
      vegetarian: isVegetarian,
      vegan: isVegan,
      contents: burgerState.cartItems,
      type: ItemType.BURGER,
    };

    addToCart(newBurger);
    burgerState.clearCart();
  }
}
