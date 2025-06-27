const accountId = 12345
let accountEmail = "example@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;
let account = ""
let sum = 1+2
let a = "b" + sum

// accountId = 2 // not allowed

accountEmail = "abc@abs.com"
accountPassword = "12321"
accountCity = "Deli"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([ accountEmail, accountId, accountPassword, accountCity, accountState, account, sum, a])
