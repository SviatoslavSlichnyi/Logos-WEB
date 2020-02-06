let employeeSalaries = {
  Steve: 12399.45,
  Sam: 13453.45,
  Cook: 20111.11,
  Sara: 2000
};

let sums = 0;
if (employeeSalaries == null) {
  sums = 0;
} else {
  for (let salary in employeeSalaries) {
    sums += employeeSalaries[salary];
  }
}

console.log(`summary salaries is ${sums}`);
