"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3);
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({brand: "bootle", type: 1}); 
function getSearch(product) {
    //do some database opertaions
    const myIndex = 3;
    return product[myIndex];
}
const GetMoreProducts = (products) => {
    //do some database opertaions
    const myIndex = 4;
    return products[myIndex];
};
function anotherFn(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
