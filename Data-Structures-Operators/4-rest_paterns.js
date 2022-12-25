'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    Tue: {
      open: 12,
      close: 22,
    },
    Fri: {
      open: 11,
      close: 23,
    },
    Sat: {
      open: 0,
      close: 24,
    },
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderPizza('Biryani', 'pizza', 'pasta', 'burger');
restaurant.orderPizza('Biryani');
/*
//spreads, because right side of =
const arr = [1, 2, ...[3, 4]];
*/

/*
//REST, because left side of =
const [a, b, ...ohers] = [1, 2, 3, 4, 5];
console.log(a, b, ohers);
*/

/*
const [pizza, , risasto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risasto, otherFood);
*/

/*
const { Sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
*/

/*
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(1, 2);
add(5, 4, 3, 7);
add(8, 7, 6, 5, 4, 3, 2, 1);
const x = [2, 3, 4];
add(...x);
*/
