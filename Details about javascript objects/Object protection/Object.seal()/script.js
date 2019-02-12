const obj= {
  id: 52
};
console.info(Object.isSealed(obj));
Object.seal(obj);

delete obj.id;
obj.name='Ann';

console.log(obj);//output: Object: {id: 52}
console.info(Object.isSealed(obj));
