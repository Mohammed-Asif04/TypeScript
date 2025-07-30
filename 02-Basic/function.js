"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(6);
getUpper("Mohammed");
signUp("Mohammed", "mohammed@gmail.com", false);
loginUser("Mohammed", "mohammed@gmail.com");
// function getValue(val: number): boolean{
//     if (val > 5){
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["Batman", "Superman", "Spiderman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
