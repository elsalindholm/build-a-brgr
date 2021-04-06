import React from 'react';
import { AppState } from '../../AppState';
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
  public render() {
    return (
      <div className={'burgers-page'}>
        <div className={'title'}>Burgers</div>
        <div className={'blurb'}>
          Build your own burger by choosing your ingredients from below.
        </div>
        <div className={'blurb'}>All of our burgers come with lettuce.</div>
        <div className={'blurb'}>Ready, set ...... BUILD!</div>
        <div className={'price'}>Price £11.50</div>
        <div className={'burger-builder'}>
          <div className={'ingredients-display'}>
            <div className={'ingredients'}>
              Buns
              <div className={'options'}>
                <BurgerIngredientComp menuItem={brioche} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={sesame} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={veganBun} appState={this.props.appState} />
              </div>
            </div>
            <div className={'ingredients'}>
              Patties
              <div className={'options'}>
                <BurgerIngredientComp menuItem={beefPatty} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={chickenPatty} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={pulledPork} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={beanBurger} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={mushroomPatty} appState={this.props.appState} />
              </div>
            </div>
            <div className={'ingredients'}>
              Cheese
              <div className={'options'}>
                <BurgerIngredientComp menuItem={cheddar} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={applewood} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={blueCheese} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={veganCheese} appState={this.props.appState} />
              </div>
            </div>
            <div className={'ingredients'}>
              Sauces
              <div className={'options'}>
                <BurgerIngredientComp menuItem={spicyMayo} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={pestoMayo} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={ranch} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={ketchup} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={mustard} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={sweetChilli} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={bbq} appState={this.props.appState} />
              </div>
            </div>
            <div className={'ingredients'}>
              Toppings
              <div className={'options'}>
                <BurgerIngredientComp menuItem={gherkins} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={onionRings} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={tomato} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={crispyOnion} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={bacon} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={blackPudding} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={avocado} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={mushrooms} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={redOnion} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={hashBrown} appState={this.props.appState} />
                <BurgerIngredientComp menuItem={roastedPeppers} appState={this.props.appState} />
              </div>
            </div>
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
