import { EnumDeclaration } from 'typescript';

export enum ItemType {
  GENERAL = 'general',
  BURGER = 'burger',
}

export interface MenuItem {
  id?: string;
  name: string;
  price: number;
  vegetarian?: boolean;
  vegan?: boolean;
  buttonTxt?: string;
  type: ItemType;
  image?: string;
}

export interface BurgerItem extends MenuItem {
  contents: MenuItem[];
}
//////////////sides

export const fries: MenuItem = {
  id: '0',
  name: 'Fries',
  price: 5,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
  type: ItemType.GENERAL,
  image: '/Assets/potato.jpg',
};

export const sweetPotatoFries: MenuItem = {
  id: '1',
  name: 'Sweet Potato Fries',
  price: 6,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
  type: ItemType.GENERAL,
  image: '/Assets/sweetpotato.jpg',
};

export const houseSlaw: MenuItem = {
  id: '3',
  name: 'House Slaw',
  price: 5,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Cart',
  type: ItemType.GENERAL,
  image: '/Assets/cabbage2.jpg',
};

export const kimchiFries: MenuItem = {
  id: '4',
  name: 'Kimchi Fries',
  price: 6,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Cart',
  type: ItemType.GENERAL,
  image: '/Assets/frieswithtopping.jpg',
};

/////////////// drinks

export const pepsiDrink: MenuItem = {
  id: '5',
  name: 'Pepsi Drink',
  price: 3,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
  type: ItemType.GENERAL,
  image: '/Assets/pepsi.jpg',
};

export const lemonade: MenuItem = {
  id: '6',
  name: 'Lemonade',
  price: 2,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Cart',
  type: ItemType.GENERAL,
  image: '/Assets/lemonade.jpg',
};

export const fizzyElderflower: MenuItem = {
  id: '7',
  name: 'Elderflower Fizz',
  price: 3,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
  type: ItemType.GENERAL,
  image: '/Assets/elderflower.jpg',
};

export const beer: MenuItem = {
  id: '8',
  name: 'Non-alcoholic beer',
  price: 3,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
  type: ItemType.GENERAL,
  image: '/Assets/beer.jpg',
};

///// burger toppings

/// buns

export const brioche: MenuItem = {
  id: '9',
  name: 'Brioche Bun',
  price: 1,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const sesame: MenuItem = {
  id: '10',
  name: 'Sesame Bun',
  price: 1,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const veganBun: MenuItem = {
  id: '11',
  name: 'Vegan Bun',
  price: 1,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

/// patties
export const beefPatty: MenuItem = {
  id: '12',
  name: 'Beef',
  price: 5,
  vegetarian: false,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};
export const chickenPatty: MenuItem = {
  id: '13',
  name: 'Chicken',
  price: 4,
  vegetarian: false,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const pulledPork: MenuItem = {
  id: '14',
  name: 'Pulled Pork',
  price: 4,
  vegetarian: false,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const beanBurger: MenuItem = {
  id: '15',
  name: 'Bean BRGR',
  price: 4,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const mushroomPatty: MenuItem = {
  id: '16',
  name: 'Portobello Mushroom',
  price: 3,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

///cheese
export const cheddar: MenuItem = {
  id: '17',
  name: 'Cheddar',
  price: 1,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const applewood: MenuItem = {
  id: '18',
  name: 'Applewood',
  price: 2,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const blueCheese: MenuItem = {
  id: '19',
  name: 'Blue Cheese',
  price: 2,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const veganCheese: MenuItem = {
  id: '20',
  name: 'Vegan Cheese',
  price: 2,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

///sauces
export const spicyMayo: MenuItem = {
  id: '21',
  name: 'Spicy Mayonnaise',
  price: 1,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const pestoMayo: MenuItem = {
  id: '22',
  name: 'Pesto Mayo',
  price: 1,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const ranch: MenuItem = {
  id: '23',
  name: 'Ranch Sauce',
  price: 1,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const ketchup: MenuItem = {
  id: '24',
  name: 'Ketchup',
  price: 0,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const mustard: MenuItem = {
  id: '25',
  name: 'Mustard',
  price: 0,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const sweetChilli: MenuItem = {
  id: '26',
  name: 'Sweet Chilli',
  price: 1,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const bbq: MenuItem = {
  id: '27',
  name: 'BBQ',
  price: 1,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};
///toppings

export const gherkins: MenuItem = {
  id: '28',
  name: 'Gherkins',
  price: 1,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const onionRings: MenuItem = {
  id: '29',
  name: 'Onion Rings',
  price: 2,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const tomato: MenuItem = {
  id: '30',
  name: 'Tomato',
  price: 0,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const crispyOnion: MenuItem = {
  id: '31',
  name: 'Crispy Onion',
  price: 1,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const bacon: MenuItem = {
  id: '32',
  name: 'Bacon',
  price: 2,
  vegetarian: false,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const blackPudding: MenuItem = {
  id: '33',
  name: 'Black Pudding',
  price: 2,
  vegetarian: false,
  vegan: false,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const avocado: MenuItem = {
  id: '34',
  name: 'Avocado',
  price: 2,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const mushrooms: MenuItem = {
  id: '35',
  name: 'Mushrooms',
  price: 1,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};
export const redOnion: MenuItem = {
  id: '36',
  name: 'Caramellised Red Onion',
  price: 1,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const hashBrown: MenuItem = {
  id: '37',
  name: 'Hash Brown',
  price: 2,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};

export const roastedPeppers: MenuItem = {
  id: '38',
  name: 'Roasted Red Pepper',
  price: 1,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
  type: ItemType.GENERAL,
};
