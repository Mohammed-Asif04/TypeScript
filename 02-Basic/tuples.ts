// const user: (string | number)[] = ["John", 23];

let User: [string, number , boolean] = ["John", 23, true];

let rgb: [number, number, number] = [255, 255, 255];

type UserType = [number , string];
const user5: UserType = [23, "John"];
user5[1] = "John";
// user5.push(true); Error fixed