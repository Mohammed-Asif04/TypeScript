// String Declaration
let greeting: string = "Hello Mohammed";
greeting.toUpperCase();
console.log(greeting);

// Number Declaration
let UserId: number = 12425.5765;
UserId.toFixed(2);
console.log(UserId);

// Boolean Declaration
let isLoggedIn: boolean = false;
isLoggedIn.valueOf();
console.log(isLoggedIn);

// any Declaration
let hero;
function getHero(){
    return "Batman";
}
hero = getHero();
console.log(hero);

//noImplicitAny
function getHero2(){
    return "Batman";
}
hero = getHero2();
console.log(hero);
export  {};