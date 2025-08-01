"use strict";
/*
class User10{
    public email: string;
    name: string;
    private readonly city: string ="sambalpur"; // only acessible within class constructor
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}
*/
//            or
class User10 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1;
        this._courseCount = 1;
        this.city = "sambalpur";
        this.email = email;
        this.name = name;
    }
    // Getter
    get getAppleEmail() {
        return `apple@${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // Setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User10 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCoureCount() {
        this._courseCount = 2;
    }
}
const Asif = new User10("asif@gmail.com", "Asif");
// Asif.city = "Sambalpur";
