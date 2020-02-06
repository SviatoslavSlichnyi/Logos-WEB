//old
var var_name = "value";
//new
let variable_name = "<value>";
const const_var_name = "<const value>";

//functions
//old
function name_func() {
  console.log("Hello World");
}
//new
//example #1
greetings = name => {
  console.log(`Hello, ${name}`);
};
//example #2
greetings = name => console.log(`Hello, ${name}`);
//example #3
greetings = name => console.log(`Hello, ${name}`);
greetings("Alex");

//example #4
greetingsString = name => "Hello, " + name;

let helloStr = greetingsString("Peter");
console.log(helloStr);

//--this
//this are reference to parent object in function
function infoAboutParent() {
  console.log(this);
}

//`this` are referenced to the object of the function was declared
arrowFnInfoAboutParent = () => {
  console.log(this);
};

let btn = document.getElementById("hello_btn");
if (btn) {
  //in this case `this` references to btn
  btn.addEventListener("click", infoAboutParent);
  //in this case `this` references to window
  //because the function was declared under window object
  btn.addEventListener("click", arrowFnInfoAboutParent);
}

//--default values in functions
equals = (number, compare = 0) => {
  return number == compare;
};
console.log(`10 == 10 is ${equals(10, 10)}`);
console.log(`10 == <default 0> is ${equals(10)}`);

//obj fields
//while the obj creation the fields are filled
//      with the previous variables
//      with the same name
let name = "Anna";
let age = 25;

let obj = {
  name: "Max",
  age,

  greet() {
    console.log(`${this.name} ${this.age}`);
  }
};

obj.greet();
//OUTPUT: Max 25

//new syntax feature
//naming with spaces
let namingDemo = {
  name: "Max",

  greet() {
    console.log(`${this.name} ${this.age}`);
  }
};
obj["greet"]();

//--for loop
let testArray = [1.23, 4.6, 6.2];
for (let item of testArray) {
  console.log(item);
}
