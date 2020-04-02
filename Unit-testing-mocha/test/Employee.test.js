const assert = require('assert');

class Employee {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getEmail() {
    return this.firstName + '.' + this.lastName + '@' + 'company.com';
  }

  raiseSalary() {
    this.salary = this.salary * this.raise;
  }

}

Employee.prototype.raise = 1.04;

beforeEach( () => {
  console.log('new employee created!')
  employee = new Employee('Wesam', 'Mustafa', 5000);
})

describe('Suite tests for `Employee`', () => {
  it('Should create new employee', () => {
    // console.log(employee.getFullName());
    // console.log(employee.getEmail());
    // console.log(employee.salary);
    // employee.raiseSalary();
    // console.log(employee.salary);
    // Assert that new object created with initial data
    assert.deepEqual(employee,new Employee('Wesam', 'Mustafa', 5000))
  })

  // Assert when we change first name and last name getFullName function return correct name with the new name
  it('fullName', () => {
     let employee = new Employee('aya', 'morsi', 5000);
        assert.equal(employee.getFullName(), 'aya morsi');
      });

  // Assert when we change first name and last name getEmail function return correct email with the new name
  it('write email', () => {
    let employee = new Employee('aya', 'morsi', 5000);
    assert.equal(employee.getEmail(), 'aya.morsi@company.com');
  });

  // Assert when we raise employee salary, the salary will be confirmed  increased for this specific employee
   it('increase salary', () => {
     employee.raiseSalary();
     assert.equal(employee.salary,5000*1.04);
   });

});
