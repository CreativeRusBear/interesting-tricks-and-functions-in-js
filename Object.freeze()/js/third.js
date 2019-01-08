//функция isFrozen проверяет заморожен объект или нет, и возвращает резульата типа boolean
//true: объект заморожен
//false: объект не заморожен

let Employee = {
    name: 'Andrew',
    age: 21
};

let Student = {
    name: 'Ann',
    age: 18
};

const emp = Object.freeze(Employee);

console.log(Object.isFrozen(Employee));
console.log(Object.isFrozen(Student));