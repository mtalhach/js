const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//////////////////////////////////
/*
resturant.orderDelivery({
  address: 'Lahore',
});
*/
//////////////////////////////////

/*
const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);
*/
//////////////////////////////////

/*
const {
  name: resturantName,
  openingHours: hours,
  categories: categ,
} = resturant;
console.log(resturantName, hours, categ);
*/
//////////////////////////////////

/*
const { menu = [], starterMenu: starter = [] } = resturant;
console.log(menu, starter);
*/
//////////////////////////////////

/*
let a = 134;
let b = 456;
const obj = { a: 12, b: 13, c: 14 };
({ a, b } = obj);
console.log(a, b);
*/
//////////////////////////////////

/*
const { openingHours } = resturant;
const { Fri } = openingHours;
console.log(Fri);
*/
//////////////////////////////////

/*
const { openingHours } = resturant;
const {
  Fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
