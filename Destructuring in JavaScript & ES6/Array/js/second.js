const countries=['Russia', 'French', 'Italy', 'Canada', 'USA'];
const [getA, getB, ...theRestAsArr]=countries;
console.log(getA);
console.log(getB);
console.log(theRestAsArr);