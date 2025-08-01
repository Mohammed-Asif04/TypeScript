const score: Array<number> = []
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val:any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}
// identityThree(3);

function identityFour<T>(val: T): T {
    return val;
}

interface Bootle{
    brand: string,
    type: number;
}
// identityFour<Bootle>({brand: "bootle", type: 1}); 

function getSearch<T>(product: T[]): T {
    //do some database opertaions
    const myIndex = 3;
    return product[myIndex];
}

const GetMoreProducts =<T,>(products: T[]): T =>{
    //do some database opertaions
    const myIndex = 4;
    return products[myIndex];
}

interface database{
    connection: string,
    username: string,
    password: string
}


function anotherFn<T,U extends database>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

// anotherFn(3 ,{connection: "abc", username: "xyz", password: "123"});

interface Quiz{
    name: string,
    type: string,
}
interface Courses{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] =[]

    addToCart(product: T){
        this.cart.push(product);
    }
}