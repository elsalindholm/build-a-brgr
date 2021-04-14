import React from 'react';
import { AppState } from '../../AppState';
import { BurgerCart } from '../../BurgerCart';
import { CartState } from '../../CartState';
import {
  applewood,
  avocado,
  bacon,
  bbq,
  beanBurger,
  beefPatty,
  blackPudding,
  blueCheese,
  brioche,
  cheddar,
  chickenPatty,
  crispyOnion,
  gherkins,
  hashBrown,
  ketchup,
  MenuItem,
  mushroomPatty,
  mushrooms,
  mustard,
  onionRings,
  pestoMayo,
  pulledPork,
  ranch,
  redOnion,
  roastedPeppers,
  sesame,
  spicyMayo,
  sweetChilli,
  tomato,
  veganBun,
  veganCheese,
} from '../../MenuItems';
import { BurgerIngredientComp } from './BurgerIngredientComp';

import './burgers.scss';
import { MenuItemComp } from './MenuItemComp';

interface BurgerProps {
  appState: AppState;
}

export class BurgersPage extends React.PureComponent<BurgerProps> {
  private burgerState = new CartState();

  public render() {
    const { appState } = this.props;

    return (
      <div className={'burgers-page'}>
        <div className={'title'}>Burgers</div>
        <div className={'blurb'}>
          Build your own burger by choosing your ingredients from the list below.
        </div>
        <div className={'blurb'}>Please note that all of our burgers come with lettuce.</div>
        <div className={'blurb'}>Ready, set ...... BUILD!</div>

        <div className={'burger-builder'}>
          <div className={'ingredients-display'}>
            <div className={'ingredients'}>
              Buns
              <div className={'options'}>
                <BurgerIngredientComp menuItem={brioche} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={sesame} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={veganBun} burgerState={this.burgerState} />
              </div>
            </div>
            <div className={'ingredients'}>
              Patties
              <div className={'options'}>
                <BurgerIngredientComp menuItem={beefPatty} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={chickenPatty} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={pulledPork} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={beanBurger} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={mushroomPatty} burgerState={this.burgerState} />
              </div>
            </div>
            <div className={'ingredients'}>
              Cheese
              <div className={'options'}>
                <BurgerIngredientComp menuItem={cheddar} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={applewood} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={blueCheese} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={veganCheese} burgerState={this.burgerState} />
              </div>
            </div>
            <div className={'ingredients'}>
              Sauces
              <div className={'options'}>
                <BurgerIngredientComp menuItem={spicyMayo} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={pestoMayo} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={ranch} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={ketchup} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={mustard} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={sweetChilli} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={bbq} burgerState={this.burgerState} />
              </div>
            </div>
            <div className={'ingredients'}>
              Toppings
              <div className={'options'}>
                <BurgerIngredientComp menuItem={gherkins} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={onionRings} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={tomato} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={crispyOnion} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={bacon} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={blackPudding} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={avocado} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={mushrooms} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={redOnion} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={hashBrown} burgerState={this.burgerState} />
                <BurgerIngredientComp menuItem={roastedPeppers} burgerState={this.burgerState} />
              </div>
            </div>
          </div>
          <BurgerCart
            burgerState={this.burgerState}
            addToCart={(menuItem: MenuItem) => appState.cartState.addToCart(menuItem)}
          />
        </div>
      </div>
    );
  }
}
