'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//use any data type,return any data type,short circuiting
//if first value is truthy then it returns first value with out knowing about second value
/*
console.log('----OR-----');
console.log(3 || 'Talha');
console.log('' || 'ch');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || '' || 0 || 'Hello' || 23 || null);
*/

/*
//restaurant.numGuest=0 this will return 10 which is incorrect so its the disadvantage of short circuiting
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 20;
console.log(guest2);
*/

console.log('----AND-----');
console.log(0 && 'Talha');
console.log(7 && 'Ch');
console.log('Hello' && 23 && null && 'Talha');
//if resturant.orderPizza available then method call other wise it print nothing
restaurant.orderPizza && restaurant.orderPizza('pizza', 'pasta');
