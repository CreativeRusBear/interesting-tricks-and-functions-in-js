const Employee = {
    name: 'John Valley'
};

const {name, age=23, job='Manager'}=Employee;

console.log(`${name}
${age}
${job}`);