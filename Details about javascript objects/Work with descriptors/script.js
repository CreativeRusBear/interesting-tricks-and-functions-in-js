const obj ={};

Object.defineProperty(obj,'id',{
    value: 42
});

console.log(obj);
console.log(obj.id);

Object.defineProperty(obj, 'name', {
    value: 'Rose',
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(obj.name);

obj.name='Angela';
console.log(obj.name);//output: Rose, because writable attribute of this property = false

Object.defineProperty(obj, 'lastName', {
    value: 'Smith',
    enumerable: false
});

console.log(Object.keys(obj));//output: "name", because enumerable attribute of this property = true


delete obj.id;
console.log(obj.id);//output: 42, because configurable: false

Object.defineProperties(obj, {
    property1:{
        value: 42,
        writable: true
    },
    property2: {}
});

console.log(obj.property1);//output: 42
