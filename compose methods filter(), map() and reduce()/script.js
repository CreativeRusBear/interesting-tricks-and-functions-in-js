let shoppingCart = [
    { productTitle: "Functional Programming", type: "books", amount: 10 },
    { productTitle: "Kindle", type: "eletronics", amount: 30 },
    { productTitle: "Shoes", type: "fashion", amount: 20 },
    { productTitle: "Clean Code", type: "books", amount: 60 }
];

const findBooks = (order)=> order.type==="books",
      getAmount = (order)=> order.amount,
      sumAmount = (sum, order)=>sum+order;

function getTotalAmount(shoppingCart) {
    return shoppingCart
        .filter(findBooks)
        .map(getAmount)
        .reduce(sumAmount,0);
}

console.log(getTotalAmount(shoppingCart));