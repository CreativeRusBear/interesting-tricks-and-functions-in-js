let Employee = {
    name: 'Andrew',
    age: 21
};

const emp = Object.freeze(Employee);

emp.name='Valentine';
Employee.name='Bob';
console.log(Employee);
console.log(emp);