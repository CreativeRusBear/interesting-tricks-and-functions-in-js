const obj = {
    get name(){
        return this._name.toUpperCase();
    },
    set name(value){
        this._name=value;
    },
    get id(){
        return this._id.toString(2); // Преобразуем десятичное число в его двоичное представление
    },
    set id(value){
        this._id = value;
    }
};

obj.name='Angela';
console.log(obj.name);//output: ANGELA

obj.id = 5;
console.log(obj.id);//output: 101
