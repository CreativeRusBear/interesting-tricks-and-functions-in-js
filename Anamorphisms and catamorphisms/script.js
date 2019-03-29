function ExampleOfAnamorphism(n) {
    const list=[];
    for (let i=n; i>0; --i){
        list.push(i);
    }
    return list;
}


function ExampleOfCatamorphism(list) {
    let product = 1;
    for (const n of list){
        product*=n;
    }
    return product;
}

let anamorphism=ExampleOfAnamorphism(5);
console.log(`Result of example with Anamorphism is ${anamorphism}`);

let catamorphism = ExampleOfCatamorphism(anamorphism);
console.log(`Result of example with Catamorphism is ${catamorphism}`);
