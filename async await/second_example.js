async function myFunc() {
    // допустимо использование await, поскольку функция асинхронная
    return "Hello world!";
}

myFunc().then(message=>console.info(message));
//возвращённое значение myFunc стало промисом из-за асинхронной функции
