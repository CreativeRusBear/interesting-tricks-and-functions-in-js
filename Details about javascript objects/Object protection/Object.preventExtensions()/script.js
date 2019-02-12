const obj = {
    id: 5
};
console.info(Object.isExtensible(obj));
Object.preventExtensions(obj);
obj.name='Alina';
console.log(obj);// Object { id: 5 }
console.info(Object.isExtensible(obj));
