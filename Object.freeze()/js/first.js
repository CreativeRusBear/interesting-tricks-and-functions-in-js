let Employee ={
    name: 'Andrew',
    age: 21
};

Object.freeze(Employee);

Employee.name='Peter';
console.log(Employee);
//объект не изменит значения своих свойств, так как был использован метод freeze()
