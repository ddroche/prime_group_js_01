var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];

// [employeeName, employeeNum, employeeSalary, employeeReviewRating]

// Create an Employee constructor that is capable of holding each employee's
// data.

var Employee = function(name, number, salary, reviewRating) {
  this.name = name;
  this.number = number;
  this.salary = parseInt(salary);
  this.reviewRating = reviewRating;

  this.calcStiPercentage = function() {
    // calculate bonus as a percentage
    var bonus = 0;
    if (this.reviewRating === 3) {
      // base bonus = 4%
      bonus = 4;
    } else if (this.reviewRating === 4) {
      // base bonus = 6%
      bonus = 6;
    } else if (this.reviewRating === 5) {
      // base bonus = 10%
      bonus = 10;
    } else {
      // base bonus = 0%
      bonus = 0;
    }

    if (this.number.length === 4) {
      bonus += 5;
    }

    if (this.salary > 65000) {
      bonus -= 1;
    }

    if (bonus > 13) {
      bonus = 13;
    }

    return bonus;
  };

  this.calcComp = function(salary, bonus) {
    // convert bonus to dec
    var dec = bonus / 100;

    // new salary
    return salary *= (1 + dec);
  };

  this.roundedBonus = function(salary, bonus) {
    var total = salary * (bonus / 100);

    // round to nearest dollar
    return Math.round(total);
  };

};

// evaluate employee data

function evalData(employee) {
  var data = {
    name: employee.name,
    STIpercentage: employee.calcStiPercentage(),
    compensation: employee.calcComp(employee.salary, employee.calcStiPercentage()),
    bonus: employee.roundedBonus(employee.salary, employee.calcStiPercentage()),
  };

  return data;
}

// Convert each employee into an instance of an Employee object.

var atticus = new Employee('Atticus', '2405', '47000', 3);
var jem = new Employee('Jem', '62347', '63500', 4);
var boo = new Employee('Boo', '11435', '54000', 3);
var scout = new Employee('Scout', '6243', '74750', 5);

// Store each instance in an array called employees.

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
  console.log(evalData(employees[i]));
}
