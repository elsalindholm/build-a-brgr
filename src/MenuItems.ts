export interface MenuItem {
  id: string;
  name: string;
  price: number;
  vegetarian: boolean;
  vegan: boolean;
}

//////////////sides

export const fries: MenuItem = {
  id: '0',
  name: 'Fries',
  price: 5,
  vegetarian: true,
  vegan: true,
};

export const sweetPotatoFries: MenuItem = {
  id: '1',
  name: 'Sweet Potato Fries',
  price: 6,
  vegetarian: true,
  vegan: true,
};

export const houseSlaw: MenuItem = {
  id: '3',
  name: 'House Slaw',
  price: 5,
  vegetarian: true,
  vegan: false,
};

export const kimchiFries: MenuItem = {
  id: '4',
  name: 'Kimchi Fries',
  price: 6,
  vegetarian: true,
  vegan: false,
};

/////////////// drinks

export const pepsiDrink: MenuItem = {
  id: '5',
  name: 'Pepsi Drink',
  price: 3,
  vegetarian: true,
  vegan: true,
};

export const lemonade: MenuItem = {
  id: '6',
  name: 'Lemonade',
  price: 2,
  vegetarian: true,
  vegan: false,
};

export const fizzyElderflower: MenuItem = {
  id: '7',
  name: 'Elderflower Fizz',
  price: 3,
  vegetarian: true,
  vegan: true,
};

export const irnBru: MenuItem = {
  id: '8',
  name: 'Irn Bru',
  price: 3,
  vegetarian: true,
  vegan: true,
};
