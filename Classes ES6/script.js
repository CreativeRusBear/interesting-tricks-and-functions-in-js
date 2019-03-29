class Person {
    constructor (name,age){
        this.name =name;
        this.age=age;
    }

    stringSentence(){
        return `Привет, я ${this.name}. Мой возраст: ${this.age} лет`;
    }
}

let man=new Person('Иван', 18);
console.log(man.stringSentence());
