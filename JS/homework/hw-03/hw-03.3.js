class Robot {
  work() {
    console.log("I'm Robot - I am just working.");
  }
}

class CoffeeRobot extends Robot {
  work() {
    console.log("I'm CoffeeRobot - I am just making coffee.");
  }
}

class RobotDancer extends Robot {
  work() {
    console.log("I'm RobotDancer - I am just dancing.");
  }
}

class RobotCooker extends Robot {
  work() {
    console.log("I'm RobotCooker - I am just cooking.");
  }
}

let robots = [new CoffeeRobot(), new RobotDancer(), new RobotCooker()];

for (let rob of robots) {
  rob.work();
}

console.log(
  "//------------------------------------------------------------------------------"
);

Rob = function() {
    this.work = () => {
      console.log("Rob - I am just working.");
    };
  };
  
  CoffeeRob = function() {
    __proto__: Rob;
  
    this.work = () => {
      console.log("CoffeeRob - I am just making coffee.");
    };
  };
  
  RobDancer = function() {
    __proto__: Rob;
  
    this.work = () => {
      console.log("RobDancer - I am just dancing.");
    };
  };
  
  RobCooker = function() {
    __proto__: Rob;
  
    this.work = () => {
      console.log("RobCooker - I am just cooking.");
    };
  };

let robs = [new CoffeeRob(), new RobDancer(), new RobCooker()];

for (let r of robs) {
    r.work();
}