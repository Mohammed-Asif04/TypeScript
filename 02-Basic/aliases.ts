type User ={
    name : string,
    email : string,
    isActive : boolean
}

function createUser(user:User): User {
    return {name:"",email:"",isActive:true};
} 
createUser({name:"",email:"",isActive:true});

//Readonly and Optional
type User1 ={
    readonly _id : string,
    name : string,
    email : string,
    isActive : boolean,
    creaditCardDetails?: number
}

let myUser:User1 = {
    _id:"1245",
    name:"Asif",
    email:"Asif@gmail.com",
    isActive:true
};

myUser.email = "Asif12@gmail.com";
// myUser._id = "1234";

type cardNumber ={
    cardnumber : string
}
type cardDate={
    cardDate : string
}
type cardDetails = cardNumber & cardDate & {
    cvv : number
}