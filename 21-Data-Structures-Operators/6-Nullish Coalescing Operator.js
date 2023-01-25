'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
//////////////////////////////
restaurant.numGuest = 0;
const guest1 = restaurant.numGuest || 20;
console.log(guest1);

//NULLISH: null and undefined but not 0 and ''

const guest2 = restaurant.numGuest ?? 20;
console.log(guest2);
