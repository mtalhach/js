// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// document.getElementById("demo").innerHTML=fruits.get("Apples");


// const fruits=new Map();
// fruits.set("Apples",500);
// fruits.set("Mango",200);
// fruits.set("Banana",100);
// document.getElementById("demo").innerHTML=fruits.get("Mango");


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// fruits.set("Apples",300);
// document.getElementById("demo").innerHTML=fruits.get("Apples");


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// document.getElementById("demo").innerHTML=fruits.size;


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// fruits.delete("Apples");
// document.getElementById("demo").innerHTML=fruits.size;


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// fruits.clear();
// document.getElementById("demo").innerHTML=fruits.size;


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// document.getElementById("demo").innerHTML=fruits.has("Apples");


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// let text="";
// fruits.forEach(function(value,key){
//     text+= key +" = "+ value+"<br>";
// })
// document.getElementById("demo").innerHTML=text;


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// let text="";
// for (let x of fruits.entries()){
//     text+= x +"<br>";
// }
// document.getElementById("demo").innerHTML=text;


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// let text="";
// for (let x of fruits.keys()){
//     text+= x +"<br>";
// }
// document.getElementById("demo").innerHTML=text;


// const fruits=new Map([
//     ["Apples",500],
//     ["Mango",200],
//     ["Banana",100]
// ]);
// let text="";
// for (let x of fruits.values()){
//     text+= x +"<br>";
// }
// document.getElementById("demo").innerHTML=text;


// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};
// const fruits = new Map();
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);
// document.getElementById("demo").innerHTML = fruits.get(apples);