function addTwo(num : number){
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUp(name:string , email:string, isPaid: boolean){
}

let loginUser =(name:string, email:string, isPaid: boolean = false) => {
}

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

const getHello=(s:string)=>{
    return "";
}

const heros=["Batman","Superman","Spiderman"];
heros.map(hero =>{
    return `hero is ${hero}`;
})

function consoleError(errmsg:string) : void {
    console.log(errmsg);
}
function handleError(errmsg:string) : never {
     throw new Error(errmsg);
}




export {};