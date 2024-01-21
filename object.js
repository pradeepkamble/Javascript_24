const mySym = Symbol("key1")

const jsUser = {
    name : "pradeep",
    email: "pk@gmsil.com",
    age: 26,
    "full name": "pradeep kamble",
    [mySym] : 1
}

// console.log(jsUser["full name"]);
// console.log(typeof jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser["email"]);
// console.log(jsUser);
// Object.freeze(jsUser);
// jsUser.name = "abc";
console.log(jsUser);

jsUser.greeting = function() {
    console.log(`Hello ${jsUser.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser);