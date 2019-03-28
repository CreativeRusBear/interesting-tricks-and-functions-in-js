function highlight(strings,...values) {
    const interpolation=strings.reduce((prev, current)=> {
        return prev + current + (values.length ? "" + values.shift() + "" : "");
    },"");
    return interpolation;
}

const condiment = "jam",
      meal      = "toast";


console.info(`First example`);
console.log(highlight`I like ${condiment} on ${meal}`);
