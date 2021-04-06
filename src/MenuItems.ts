export interface MenuItem {
  id: string;
  name: string;
  price: number;
  vegetarian: boolean;
  vegan: boolean;
  buttonTxt: string;
}

//////////////sides

export const fries: MenuItem = {
  id: '0',
  name: 'Fries',
  price: 5,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
};

export const sweetPotatoFries: MenuItem = {
  id: '1',
  name: 'Sweet Potato Fries',
  price: 6,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
};

export const houseSlaw: MenuItem = {
  id: '3',
  name: 'House Slaw',
  price: 5,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Cart',
};

export const kimchiFries: MenuItem = {
  id: '4',
  name: 'Kimchi Fries',
  price: 6,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Cart',
};

/////////////// drinks

export const pepsiDrink: MenuItem = {
  id: '5',
  name: 'Pepsi Drink',
  price: 3,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
};

export const lemonade: MenuItem = {
  id: '6',
  name: 'Lemonade',
  price: 2,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Cart',
};

export const fizzyElderflower: MenuItem = {
  id: '7',
  name: 'Elderflower Fizz',
  price: 3,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
};

export const irnBru: MenuItem = {
  id: '8',
  name: 'Irn Bru',
  price: 3,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Cart',
};

///// burger toppings

/// buns

export const brioche: MenuItem = {
  id: '9',
  name: 'Brioche Bun',
  price: 0,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
};

export const sesame: MenuItem = {
  id: '10',
  name: 'Sesame Bun',
  price: 0,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
};

export const veganBun: MenuItem = {
  id: '11',
  name: 'Vegan Bun',
  price: 0,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
};

/// patties
export const beefPatty: MenuItem = {
  id: '12',
  name: 'Beef',
  price: 0,
  vegetarian: false,
  vegan: false,
  buttonTxt: 'Add to Burger',
};
export const chickenPatty: MenuItem = {
  id: '13',
  name: 'Chicken',
  price: 0,
  vegetarian: false,
  vegan: false,
  buttonTxt: 'Add to Burger',
};

export const pulledPork: MenuItem = {
  id: '14',
  name: 'Pulled Pork',
  price: 0,
  vegetarian: false,
  vegan: false,
  buttonTxt: 'Add to Burger',
};

export const beanBurger: MenuItem = {
  id: '15',
  name: 'Bean BRGR',
  price: 0,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
};

export const mushroomPatty: MenuItem = {
  id: '16',
  name: 'Portobello Mushroom',
  price: 0,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
};

///cheese
export const cheddar: MenuItem = {
  id: '17',
  name: 'Cheddar',
  price: 0,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
};

export const applewood: MenuItem = {
  id: '18',
  name: 'Applewood',
  price: 0,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
};

export const blueCheese: MenuItem = {
  id: '19',
  name: 'Blue Cheese',
  price: 0,
  vegetarian: true,
  vegan: false,
  buttonTxt: 'Add to Burger',
};

export const veganCheese: MenuItem = {
  id: '20',
  name: 'Vegan Cheese',
  price: 0,
  vegetarian: true,
  vegan: true,
  buttonTxt: 'Add to Burger',
};

///sauces

///toppings
