/* let myArr = [1, 2, 3];
myArr.shift();
myArr.unshift(2);
myArr.push(4);
myArr.push(5);
myArr.push(6);
myArr.push(7);
console.log(myArr.slice(1, 3));
console.log(myArr);
console.log(myArr.splice(1, 3));
console.log(myArr);
 */
/* let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
/* //ar1.push(ar2);
//console.log(ar1);
const newAr = ar1.concat(ar2);
console.log(newAr); 
const newAe = [...ar1, ...ar2];
console.log(newAe); */
/* let ar = [1, 2, , 3, [4, 5, 6], 7, [2, [2, 3]]];
console.log(ar.flat(Infinity)); */
/* console.log(Array.isArray("Vishnu"));
console.log(Array.from("Vishnu")); */
/* console.log(Array.from({ name: "Vishnu" })); */
/* const a = 100;
const b = 200;
const c = 300;
console.log(Array.of(a, b, c)); */
/* const mysym1 = Symbol("key");
const ob1 = {
  name: "Vishnu",
  Age: "23",
  [mysym1]: "key",
  Email: "Pandey@gmail.com",
  lname: "Pandey",
  mname: "kant",
  isLoggedin: true,
  lastLogin: ["monday", "tuesday"],
  fulln: "VISHNU KANT PANDEY",
}; */
/* console.log(ob1.lname);
console.log(ob1["Email"]);
console.log(ob1.isLoggedin);
console.log(ob1.lastLogin);
console.log(ob1.fulln);
console.log(ob1[mysym1]); */
/* Object.freeze(ob1);
ob1.Email = "pandey809@gmail.com";
console.log(ob1.Email); */
/* ob1.greeting = function () {
  console.log("Hello");
};
console.log(ob1.greeting());
ob1.greeting2 = function () {
  console.log(`Hello ,${this.fulln}`);
};
console.log(ob1.greeting2()); */
/* const a = new Object();
a.fname = "vishnu";
a.age = 23;
a.mname = "kant";
a.lname = "pandey";
a.isLoggidin = true; */
//console.log(a);
/* const ob1 = {
  fname: "vishnu",
};
const ob2 = {
  mname: "kant",
};
const ob3 = {
  lname: "pandey",
};
//const  */ /* ob4 = Object.assign(ob1, ob2, ob3);
const ob4 = { ...ob1, ...ob2, ...ob3 };
console.log(ob4);
 */
/* const user = [
  {
    id: 1,
    fname: "Vishnu",
  },
  {
    id: 2,
    mname: "kant",
  },
  {
    id: 3,
    lname: "pandey",
  },
];
console.log(user[0].fname);
console.log(Object.keys(a));
console.log(Object.values(a));
console.log(Object.entries(a)); 
const ob = {
  name: "Vishnu",
  id: 1,
  age: 23,
};
const { name: a } = ob;
console.log(a);
function fun(a, b) {
  return a + b;
}
console.log(fun(2, 3));
function fun(username = "sam") {
  if (!username) {
    console.log("enter the username");
    return;
  }
  return `${username} just logged in`; 
}
console.log(fun("vishnu"));
function fun(...num) {
  console.log(num);
}
fun(100, 200, 3000);
const obj = {
  name: "Vishnu",
  id: 1,
  age: 23,
};
function fun(objn) {
  console.log(`username is ${objn.name} and id is ${objn.id}`);
}
fun({
  name: "Pandey",
  id: 2,
});
const myarr = [100, 200, 300];
function funn(newAr) {
  console.log(newAr[1]);
}
funn([2000, 3000, 300]);
function one() {
  const username = "Vishnu";
  function two() {
    const lname = "pandey";
    console.log(username);
  }
  two();
}
one();
add(3);
function add(num) {
  return num + 1;
}

const ad = function twi(num) {
  return num + 1;
};
console.log(ad(4));
const obj = {
  name: "Vishnu",
  id: 1,
  age: 23,
  address: "Pune",
  populate: function () {
    console.log(`${this.name} has joined the chat`);
    //console.log(this);
  },
};
obj.populate();
console.log(this);*/
/* function add() {
  console.log(this.name);
}
add(); */
//console.log(this.name);
/* obj.populate();
obj.name = "pandey";
obj.populate(); 
const addTwo = (a, b) => {
  return a + b;
};
console.log(addTwo(2, 3));
const add = (a, b) => a + b;
console.log(add(2, 4));
const Explicit = () => ({ name: "Vishnu", id: 1 });
console.log(Explicit());
(function add(a, b) {
  console.log(a + b);
})(2, 3);
(() => console.log("Arrow iffe"))();
(() => console.log("iffe"))();
let val1;
val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 15;
console.log(val1);
val1 = null ?? 5 ?? 10;
console.log(val1);
let a = 1;
let b = 2;
a = 1 ? (b += 2) : (b -= 1);
console.log(b);
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  console.log(i);
}

const greetings = "Hello World";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}
const map = new Map();
map.set("IN", "India");
map.set("US", "United State");
map.set("UK", "United Kingdom");
map.set("RS", "Russia");
for (const [key, value] of map) {
  console.log(key, ":-", value);
}
console.log(map);
const obj = {
  name: "Vishnu",
  id: 1,
};
for (const key in obj) {
  console.log(`value of ${key} is ${obj[key]}`);
}
const arr = ["a", "b", "c", "d"];
for (const key in arr) {
  console.log(arr[key]);
}
// for each
const arr = [1, 2, 3, 4];
arr.forEach(function (item) {
  //console.log(item);
});
arr.forEach((i) => {
  // console.log(i);
});
function callBack(i) {
  //console.log(i);
}
arr.forEach(callBack);
arr.forEach((item, index, ar) => {
  // console.log(item, index, ar);
});
const array = [
  {
    Name: "Python",
    Symbol: "Py",
  },
  {
    Name: "Jave",
    Symbol: "Jv",
  },
  {
    Name: "CPP",
    Symbol: "C++",
  },
];
array.forEach((obj) => {
  console.log(obj.Symbol);
});
// Filter And MAp
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const val = nums.filter((item) => item > 4);
//console.log(val);
const val = nums.filter((item) => {
  return item > 4;
});
console.log(val);
const books = [
  { title: "Book one", genre: "fiction", publish: 1981, edition: 2004 },
  { title: "Book two", genre: "Science", publish: 1982, edition: 2005 },
  { title: "Book three", genre: "History", publish: 1982, edition: 2006 },
  { title: "Book four", genre: "Non Science", publish: 1984, edition: 2007 },
  { title: "Book five", genre: "Fiction", publish: 1985, edition: 2008 },
  { title: "Book six", genre: "Geo", publish: 1986, edition: 2009 },
  { title: "Book seven", genre: "G Affairs", publish: 1987, edition: 2010 },
  { title: "Book eight", genre: "Rom", publish: 1988, edition: 2011 },
];

const b = books.filter((item) => item.edition > 2004 && item.edition < 2007);
console.log(b);
// Map
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNums = nums.map((item) => (item = item + 10));
const newNums = nums
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((val) => val > 41);
console.log(newNums);
const myArr = [1, 2, 3];
const ans = myArr.reduce(function (acc, currval) {
  return acc + currval;
}, 0);
console.log(ans);
const arr = [1, 2, 3, 4, 5, 6, 7];
const val = arr.reduce((acc, cur) => acc + cur, 0);
console.log(val);

const course = [
  { name: "java", price: 2000 },
  { name: "Python", price: 5000 },
  { name: "Cpp", price: 7000 },
  { name: "JS", price: 6000 },
  { name: "React", price: 10000 },
];
const FindTotal = course.reduce((acc, cur) => acc + cur.price, 0);
console.log(FindTotal);
const ob = {
  fname: "Vishnu",
  mname: "kant",
};
console.log(Object.values(ob));
const a = 5 ?? 10;
console.log(a);
const b = undefined ?? 5 ?? 10;
console.log(b);
const c = undefined ?? 15;
console.log(c);

// Hoisting
console.log(addTwo(5));*/
// error
/* const addTwo = (a, b) => {
  return a + b;
}; 
function addTwo(num) {
  return num + 1;
}
const addTwo = (num) => {
  return num + 1;
};
const ob = {
  name: "vishnu",
  id: "1",
};
function fun(ob) {
  console.log(ob.this);
}
// Promise
// Creeation of promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1");
    resolve();
  }, 1000);
})
  .then(() => {
    console.log("promises resolved");
  })
  .catch(() => {
    console.log("error");
  })
  .finally(() => {
    console.log("It will be printed always");
  });
// getting data from resolve
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Data");
    resolve({ username: "vishnu", id: 2 });
  }, 1000);
});
promise.then((data) => {
  console.log(data);
});
// accessing data value
const promise = new Promise((resolve, reject) => {
  let val = false;
  if (val) {
    console.log("There is not any type of error");
    resolve({ username: "Vishnu", id: 2 });
  } else {
    reject("error :something went wrong");
    console.log("Error Occured");
  }
});
promise
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });
// async await

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let val = true;
    if (val) {
      resolve({ name: "Vishnu" });
      console.log("resolved");
    } else {
      reject("error:Some error occured");
      console.log("rejected");
    }
  }, 1000);
});*/

/* async function getdetails() {
  const response = await promise;
  console.log(response);
}
getdetails();
 
// handling error
async function handleerror() {
  try {
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
handleerror();
// fetch url
async function Githubdata() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("e", error);
  }
}
Githubdata();
// fetch url with then
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((errror) => console.log(errror));
// Object Literal
const ob = {
  name: "Vishnu",
  id: 1,
  isLoggein: true,
  getDetails: function getData() {
    console.log(this.name);
    console.log(this);
  },
};
console.log(ob.getDetails());
console.log(this);
function funn(username, id, place) {
  this.username = username;
  this.id = id;
  this.place = place;
  return this;
}
const user1 = new funn("Vishnu", 1, "pune");
const user2 = new funn("Pandey", 2, "sitmarhi");
console.log(user1);
console.log(user2);
// Prototype
function user(username, score) {
  this.username = username;
  this.score = score;
}

user.prototype.increment = function () {
  this.score++;
  console.log(this.score);
};
user.prototype.printme = function () {
  //this.username = "pandey";
  console.log(this.username);
};
const ans = new user("vishnu", 90);
const ans2 = new user("Kahi", 97);
ans2.increment();
ans2.printme();

function returnLeng(text) {
  this.text = text;
}
returnLeng.prototype.reducespa = function () {
  this.text = text.tream();
  console.log(this.text.length());
};
const ans = new returnLeng("vishni    ");
ans.reducespa();
const ob = {
  name: "Vishnu",
  id: 1,
  isTrue: function () {
    console.log(this.name);
  },
};
Object.prototype.vishnu = function () {
  this.name = ob.name; //"Pandey";
  console.log(this.name); //`this is present in every object :-my name is ${this.name}`);
};
ob.vishnu();

String.prototype.len = function () {
  console.log(`true length is ${this.trim().length}`);
};
"Vishnu    ".len();
// call keyword with this
function setusername(username) {
  this.username = username;
}
function getdetails(username, id, salry) {
  setusername.call(this, username);
  this.id = id;
  this.salry = salry;
}
const ob = new getdetails("Vishnu", 1, 2000);
console.log(ob);

// classes

class vishnu {
  constructor(username, id, password) {
    this.username = username;
    this.id = id;
    this.password = password;
  }
  printname() {
    console.log(this.username);
  }
  getid;
}
const ans = new vishnu("pandey", 1, 123);
ans.printname();
const ans1 = new vishnu("Vishnu", 2, 1234);
ans1.printname();

// INHERITANCE
class User {
  constructor(username, id, age) {
    this.username = username;
    this.id = id;
    this.age = age;
  }
  printuser() {
    console.log(this.username);
  }
}
class teacher extends User {
  constructor(username, subj, salr) {
    super(username);
    this.salr = salr;
    this.subj = subj;
  }
  printDetails() {
    console.log(this.username, this.salr, this.subj);
  }
}
const ans = new teacher("Vishnu", "Physics", 30000);
ans.printDetails();

// static
class user {
  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
  }
  static printDet() {
    console.log(this.name);
  }
}
const ans = new user("Vishnu", 2, 23);
ans.printDet();
// pi value cannot be changed
const p = Math.PI;
Math.PI = 2;
console.log(Math.PI);
const descr = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descr);
// enumarable configurable
const ob = {
  name: "Vishnu",
  id: 1,
  age: 23,
};
const desc = Object.getOwnPropertyDescriptor(ob, "name");
console.log(desc);
Object.defineProperty(ob, "name", {
  enumerable: false,
  writable: false,
  configurable: false,
});
const desc1 = Object.getOwnPropertyDescriptor(ob, "name");
console.log(desc1);*/
class users {
  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name.toUpperCase();
  }
}
const ans = new users("Vishnu", 1, 23);
console.log(ans.name);
