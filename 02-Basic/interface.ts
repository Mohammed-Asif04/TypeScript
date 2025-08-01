interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleID?: string;
  // startTrail : () => string
  startTrail(): string;
  getCoupon(couponname: string , value: number): number;
}

interface User{
    githubToken: string,
}

interface Admins extends User{
    role : "admin" | "manager" | "learner"
}
 
const asif: Admins = {
  dbId: 124,
  role: "admin",
  githubToken: "github", 
  email: "asif@gmail.com",
  userId: 123456,
  startTrail: () => "start trail",
  getCoupon: (name : "Mohammed Asif" ,off : 19) => {
    return 10;
  },
};

asif.email = "asif@12gmail.com";
// asif.dbId = 123456;
