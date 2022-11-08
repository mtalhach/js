// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"Ch",
//     lastName: "Talha"
//   }
//   document.getElementById("demo").innerHTML = person.fullName.apply(person1);



// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   document.getElementById("demo").innerHTML = person.fullName.apply(person1, ["Lahore", "Pakistan"]); 


// document.getElementById("demo").innerHTML=Math.max(3,4,1);


// document.getElementById("demo").innerHTML = Math.max.apply(null, [1,2,3]);


// document.getElementById("demo").innerHTML = Math.max.apply(Math, [1,2,3]);