const accessorObj = {
  _name: 'Andrew',
  get name(){
      return this._name;
  },
  set name(value){
      this._name=value;
  }
};

console.log(accessorObj.name);
accessorObj.name='Bob';
console.log(accessorObj.name);
