<<<<<<< HEAD
let text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;
=======
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
>>>>>>> 1bef52e58a56757ab565ce437075c8c6f4ad5980
