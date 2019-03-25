let data = { price: 5, quantity: 2 };
let target = null;

class Dep {
    constructor () {
        this.subscribers = [];
    }
    depend () {
        if (target && !this.subscribers.includes(target))
            this.subscribers.push(target);

    }
    notify () {
        this.subscribers.forEach(sub => sub());
    }
}

Object.keys(data).forEach(key => {
    let internalValue = data[key];

    // С каждым свойством будет связан собственный
    // экземпляр класса Dep
    const dep = new Dep();

    Object.defineProperty(data, key, {
        get() {
            dep.depend();// запоминаем выполняемую функцию target
            return internalValue;
        },
        set(newVal) {
            internalValue = newVal;
            dep.notify() ;// повторно выполняем сохранённые функции
        }
    })
});

function watcher(myFunc){
    target = myFunc;
    target();
    target = null
}

watcher(() => {
    data.total = data.price * data.quantity;
    console.log(`data.price=${data.price}
data.quantity=${data.quantity}
data.total=${data.total}`);
});

//изменяем значения
data.price=20;
data.quantity=3;
