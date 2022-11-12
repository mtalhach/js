const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [starter, main] = resturant.order(2, 0);
console.log(starter, main);

/*
const arr = [1, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
*/

/*
let [first, , second] = resturant.categories;
console.log(first, second);

// const temp = first;
// first = second;
// second = temp;

[first, second] = [second, first];
console.log(first, second);
*/

/*
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [9, 8];
// console.log(p, q, r);
*/
