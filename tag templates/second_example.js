function comma(strings, ...values) {
    return strings.reduce((prev, next) => {
        let value = values.shift() || [];
        value = value.join(", ");
        return prev + next + value;
    }, "");
}

const snacks = ['apples', 'bananas', 'cherries'];

console.log(`Second example`);
console.log(comma`I like ${snacks} to snack on.`);
