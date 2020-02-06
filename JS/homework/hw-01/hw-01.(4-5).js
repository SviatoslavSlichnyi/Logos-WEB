calculate = (action, a, b) => {
  switch (action) {
    case "sum":
      return a + b;

    case "sub":
      if (b > a) {
        throw new Error("a has to be bigger than b");
      }
      return a - b;

    case "mul":
      return a * b;

    case "div":
      if (b == 0) {
        throw new Error("b cannot to be zero");
      }
      return a / b;

    default:
      throw new Error("action does not exist");
  }
};


let result;
try {
  result = calculate("sum", 2, 3);
  console.log(result);

  result = calculate("sub", 10, 8);
  console.log(result);
  
  result = calculate("mul", 2, 2);
  console.log(result);
  
  result = calculate("div", 25, 5);
  console.log(result);
  
  result = calculate("lol", 0, 0);
  console.log(result);
  
} catch(e) {
    console.error(e.name, e.message)
}
