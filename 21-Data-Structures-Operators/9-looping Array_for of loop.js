'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

/*
for (const item of menu) console.log(item);
*/
////////////////////////////////////////

/*
for (const item of menu.entries()) {
  console.log(item);
}
console.log([...menu.entries()]);
*/
////////////////////////////////////

/*
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
*/
////////////////////////////////////

/*
for (const [i, elem] of menu.entries()) {
  console.log(`${i + 1}: ${elem}`);
}
*/
/////////////////////////////////////
