'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

/*
const ingrediants = [
  prompt("Let's Make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingrediants);
restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
restaurant.orderPasta(...ingrediants);
*/

/*
const newResturant = { foundedIn: 2002, ...restaurant, founder: 'Talha' };
console.log(newResturant);
*/

const copyResturant = { ...restaurant };
copyResturant.name = 'Talha';
console.log(copyResturant.name);
console.log(restaurant.name);

/*
const arr = [1, 2, 3];
const bandNewArray = [4, 5, arr[0], arr[1], arr[2]];
console.log(bandNewArray);
*/

/*
const arr1 = [1, 2, 3];
const NewArray = [4, 5, arr1];
console.log(NewArray);
*/

/*
const arr2 = [1, 2, 3];
const NewArr = [4, 5, ...arr2];
console.log(NewArr);
console.log(...NewArr);
*/

/*
const newMenu = [...restaurant.mainMenu, 'Burger'];
console.log(newMenu);
*/

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
*/

/*
// iterables:array,string,map,set but not object
const str = 'Talha';
const letter = [...str, ' ', 'S.'];
console.log(letter);
console.log(...str);
*/
