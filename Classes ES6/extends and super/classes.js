class Polygon {
    constructor(width, height){
        this.name='Polygon';
        this.width=width;
        this.height=height;
    }
    getHelloPhrase(){
        return `Привет, я ${this.name}`;
    }
}


// Ключевое слово extends используют для объявления классов или в выражениях класса для создания дочерних классов. Они получают свойства родительских классов, а также дают возможность добавить новые свойства и изменить заимствованные.
class Square extends Polygon{

    constructor(length){
        // здесь вызван конструктор родительского класса со значением lengths
        // использованным для значений width и height класса Polygon
        // Ключевое слово super вызывает функции родителя объекта, включая его конструктор.
        super (length,length);
        this.name='Square';
        this.length=length;
    }

    getHelloPhrase() {
        return super.getHelloPhrase(`${this.name} с длинной ${this.length}`);
    }

    getArea(){
        return this.height*this.width;
    }
}


const square=new Square(10);
console.info(square.getHelloPhrase());
console.info(square.getArea());
console.log(square);
