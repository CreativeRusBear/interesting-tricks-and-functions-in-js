const book ={
    title: 'JavaScript: The Good Parts'
};
//clone with Object.assign()
let clone = Object.assign({},book);
console.log(clone);

//clone with spread operator
clone = {...book};
console.log(clone);

const arr = [1, 2, 3];
//clone with slice
let cloneArr=arr.slice();
console.log(cloneArr);

//clone with spread operator
cloneArr = [ ...arr ];
console.log(cloneArr);