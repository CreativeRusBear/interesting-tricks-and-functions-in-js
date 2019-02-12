const obj = {
    id: 55
};
console.info(Object.isFrozen(obj));//false
Object.freeze(obj);

delete obj.id;
obj.name='James';
console.log(obj);//Object: {id: 55}

console.info(Object.isExtensible());//false
console.info(Object.isSealed());//true
console.info(Object.isFrozen());//true
