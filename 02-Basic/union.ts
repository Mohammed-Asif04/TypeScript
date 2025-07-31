let score:number | string  = 97;
score = "98";
score = 98;

type User2 ={
    name: string,
    id : number
}
type Admin ={
    username : string,
    id : number
}

let Asif : User2 | Admin = {
    name : "Amisha",
    id : 1234
}
 Asif ={username:"Amisha",id:1234};

// function getDbID(id:number | string){
//     // making some API call
//     console.log(`DB id is ${id}`);
// }
getDbID(1234);
getDbID("1234");
function getDbID(id:number | string){
   if(typeof id === "string"){
    id.toLowerCase();
   }
}

// Array

const data : number[] = [1,2,3,4,5,6,7,8,9,10];
const data2 : string[] = ["a","b","c","d","e","f","g","h","i","j"];
const data3 : (number | string | boolean)[] = [1,2,3,"a","b","j",true,false];