// function myFunction(a,b){
//     if(b==undefined){
//         b=2;
//     }
//     return a*b;
// }
// document.getElementById("demo").innerHTML=myFunction(4);

// function myFunction(a,b=3){
//     return a*b;
// }
// document.getElementById("demo").innerHTML=myFunction(4);

// function findMax(){
//     let max=-Infinity;
//     for (let i=0;i<arguments.length;i++){
//         if(arguments[i]>max){
//             max=arguments[i];
//         }
//     }
//     return max;
// }
// document.getElementById("demo").innerHTML=findMax(7,8,6);

// function findMin(){
//     let min=+Infinity;
//     for (let i=0;i<arguments.length;i++){
//         if(arguments[i]<min){
//             min=arguments[i];
//         }
//     }
//     return min;
// }
// document.getElementById("demo").innerHTML=findMin(7,8,6);

// function sumAll(){
//     let sum=0;
//     for (let i=0;i<arguments.length;i++){
//        sum+=arguments[i];
//     }
//     return sum;
// }
// document.getElementById("demo").innerHTML=sumAll(7,8,6);

// const person={
//     fName:"Talha",
//     lName:"Ch",
//     age:21,
//     fullName:function(){
//         return this.fName+" "+this.lName;
//     }
// }
// document.getElementById("demo").innerHTML=person.fullName();

// function myFunction(args1,args2){
//     this.fName=args1;
//     this.lName=args2;
// }
// const obj=new myFunction("Talha","Ch");
// document.getElementById("demo").innerHTML=obj.fName;
