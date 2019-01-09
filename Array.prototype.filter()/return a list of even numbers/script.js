function even(number) {
    return number%2==0;
}

const intNumbers = [0,1,2,3,4,5,6,7,8,9,10];
console.log(intNumbers.filter(even));