function smaller(number) {
    return number<this;//this==x(3)
}

function filterArray(x, list) {
    return list.filter(smaller,x);
}

const intNumbers = [0,1,2,3,4,5,6,7,8,9,10];

console.log(filterArray(3, intNumbers));