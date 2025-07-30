const User ={
    name:"Mohammed",
    email:"mohammed@gmail.com",
    isActive: true
}

function creaetUser({name:string,isPaid:boolean}){

}
creaetUser({name:"Mohammed",isPaid:false});

function createCourse():{name: string, price: number}{
    return{name : "reactjs",price:499};
}

let newUser ={name : "Mohammed",email:"mohammed@gmail.com",isPaid:false};
creaetUser(newUser);

export {}; 