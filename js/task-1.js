function makeTransaction(quantity, pricePerDroid){
    const finalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${finalPrice} credits!`;
};
console.log(makeTransaction(5, 3000));