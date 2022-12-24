// class Car {
//   constructor(brand) {
//     this.name = brand;
//   }
//   present() {
//     return "My car Name is: " + this.name;
//   }
// }
// class Car1 extends Car {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }
//   show() {
//     return this.present() + "it is a " + this.model;
//   }
// }
// const obj = new Car1("Audi", 2015);
// document.getElementById("demo").innerHTML = obj.show();

// class Car {
//   constructor(brand) {
//     this.name = brand;
//   }
//   get Cname() {
//     return this.name;
//   }
//   set Cname(x) {
//     this.name = x;
//   }
// }
// const obj = new Car("Audi");
// document.getElementById("demo").innerHTML = obj.Cname;

// class Car{
//     constructor(brand){
//         this.name=brand;
//     }
//     get Cname(){
//         return this.name;
//     }
//     set Cname(x){
//         this.name=x;
//     }
// }
// const obj=new Car("Audi");
// obj.Cname="BMW";
// document.getElementById("demo").innerHTML=obj.Cname;
