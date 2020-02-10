//function as class
function Human(name, surname = 'Jordan') {
    this.name = name;
    this.surname = surname;

    this.sayHi = function() {
        console.log(`${this.name}` + " is my Human");
    }
}


//get and set
class Animal extends Human {

    age = 100;

    constructor(name, surname) {
        super("Jack", "Black");

        this.name = name;
        this.surname = surname;
    }

    set naming(n) {
        this.name = n + " - alyalya";
    }

    get naming() {
        return "Sir " + this.name;
    }

    set sur(surname) {
        this.surname = surname;
    }

    get sur() {
        return "Mr. " + this.surname;
    }

}

 
let h = new Human();
h.name = 'Sam';
h.sayHi();

let an = new Animal("Jack", "Black");
an.naming = "Lion";
console.log(an.naming);
an.sayHi();



//__proto__
let rabbit = {
    name: "Petter",

    sound() {
        console.log("Gaph-gaph");
    }
}

let tiger = {
    surname: "Black",
    __proto__: rabbit,

    run() {
        console.log("Speedster");
    }

}

tiger.sound();


//----------------------------------------------------------------------------

//ERROR
//Lambda is not used in function classes.
// Rob = () => {
//   this.work = () => {
//     console.log("Rob - I am just working.");
//   };
// };

// CoffeeRob = () => {
//   __proto__: Rob;

//   this.work = () => {
//     console.log("CoffeeRob - I am just making coffee.");
//   };
// };

