// function person(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// const myFather=new person("Shafiq",45,30000);
// document.getElementById("demo").innerHTML="My Father Name is: "+myFather.name;


// function person(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// const myFather=new person("Shafiq",45,30000);
// const myMother=new person("Mrs.Shafiq",35,20000);
// document.getElementById("demo").innerHTML="My Father Name is: "+myFather.name+ "<br>"+ "My Mother Name is: "+myMother.name;


// function person(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// const myFather=new person("Shafiq",45,30000);
// myFather.nationality="Pakistan";
// document.getElementById("demo").innerHTML="My Father Name is: "+myFather.name+ "<br>"+ "My Father's Nationality : "+myFather.nationality;


// function person(fName,lName,age,salary){
//     this.fName=fName;
//     this.lName=lName;
//     this.age=age;
//     this.salary=salary;
// }
// const myFather=new person("Shafiq","Ch",45,30000);
// myFather.name=function(){
//     return this.fName+" "+this.lName;
// }
// document.getElementById("demo").innerHTML="My Father Name is: "+myFather.name();


// function person(fName,age,salary){
//     this.fName=fName;
//     this.age=age;
//     this.salary=salary;
//     this.nationality="Pakistan";
// }
// const myFather=new person("Shafiq",45,30000);
// const myMother=new person("Mrs. Shafiq",35,20000);
// document.getElementById("demo").innerHTML="My Father Nationality is: "+myFather.nationality+"<br>"+"My Mother's Nationaliy: "+myMother.nationality;


// function person(fName,lName,age,salary){
//     this.fName=fName;
//     this.lName=lName;
//     this.age=age;
//     this.salary=salary;
//     this.name=function(){
//         return fName+" "+lName;
//     }
// }
// const myFather=new person("Shafiq","Ch",45,30000);
// document.getElementById("demo").innerHTML="My Father Nationality is: "+myFather.name();


// function person(fName,lName,age,salary){
//     this.fName=fName;
//     this.lName=lName;
//     this.age=age;
//     this.salary=salary;
//     this.changeName=function(name){
//         this.lName=name;
//     }
// }
// const myFather=new person("Shafiq","Ch",45,30000);
// myFather.changeName("Choudhary");
// document.getElementById("demo").innerHTML="My Father Nationality is: "+myFather.lName;