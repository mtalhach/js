// const name="Talha";
// let text="";
// for (let x of name){
//     text+= x+"<br>";
// }
// document.getElementById("demo").innerHTML=text;

<<<<<<< HEAD
// function number() {
//   let n = 0;
//   return {
//     next: function () {
//       n += 10;
//       return {
//         value: n,
//         done: false,
//       };
//     },
//   };
// }
// const n = number();
// n.next();
// n.next();
// n.next();
// document.getElementById("demo").innerHTML = n.next().value;

// const number = {};
// number[Symbol.iterator] = function () {
//   let n = 0;
//   done = false;
//   return {
//     next() {
//       n += 10;
//       if (n == 100) {
//         done = true;
//       }
//       return {
//         value: n,
//         done: done,
//       };
//     },
//   };
// };
// let text = "";
// for (let x of number) {
//   text += x + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
=======


// function number(){
//     let n=0;
//     return{
//         next:function(){
//             n+=10;
//             return{
//                 value:n,
//                 done:false
//             };
//         }
//     };
// }
// const n=number();
// n.next();
// n.next();
// n.next();
// document.getElementById("demo").innerHTML=n.next().value;



// const number={};
// number[Symbol.iterator]=function(){
//     let n=0;
//     done=false;
//     return{
//         next(){
//             n+=10;
//             if(n==100){
//                 done=true;
//             }
//             return{
//                 value:n,
//                 done:done
//             };
//         }
//     };
// }
// let text="";
// for (let x of number){
//     text+= x +"<br>";
// }
// document.getElementById("demo").innerHTML=text;


>>>>>>> 1bef52e58a56757ab565ce437075c8c6f4ad5980

// const number={};
// number[Symbol.iterator]=function(){
//     let n=0;
//     done=false;
//     return{
//         next(){
//             n+=10;
//             if(n==100){
//                 done=true;
//             }
//             return{
//                 value:n,
//                 done:done
//             };
//         }
//     };
// }
// let iterator = number[Symbol.iterator]();
// let text = ""
// while (true) {
//   const result = iterator.next();
//   if (result.done) break;
//   text += result.value +"<br>";
// }
<<<<<<< HEAD
// document.getElementById("demo").innerHTML = text;
=======
// document.getElementById("demo").innerHTML = text;
>>>>>>> 1bef52e58a56757ab565ce437075c8c6f4ad5980
