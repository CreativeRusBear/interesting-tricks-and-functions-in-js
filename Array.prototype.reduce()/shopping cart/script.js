let shoppingCart = [
    { productTitle: "Product 1", amount: 10 },
    { productTitle: "Product 2", amount: 30 },
    { productTitle: "Product 3", amount: 20 },
    { productTitle: "Product 4", amount: 60 }
];

const sumAmount =(currentTotalAmount, order)=> currentTotalAmount + order.amount;

function getTotalAmount(shoppingCart) {
    return shoppingCart.reduce(sumAmount,0);
}

console.log(getTotalAmount(shoppingCart));