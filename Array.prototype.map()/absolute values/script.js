const values = [1,2,3,-4,5];

function positiveValues(values) {
    return values.map(Math.abs);
}

console.log(positiveValues(values));