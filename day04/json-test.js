let user = {id: "kcy", pw:"1234", name:"김치윤"};
let userJSON = JSON.stringify(user);

console.log(userJSON);

user = JSON.parse(userJSON);
console.log(user);