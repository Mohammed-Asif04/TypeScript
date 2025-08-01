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
    // private _courseCount = 1;
    protected _courseCount = 1;

  private readonly city: string = "sambalpur";
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }
  // Getter
  get getAppleEmail(): string {
    return `apple@${this.email}`;
  }
  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCoureCount() {
    this._courseCount = 2;
  }
}

const Asif = new User10("asif@gmail.com", "Asif");
// Asif.city = "Sambalpur";
