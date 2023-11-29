//Variables:
//constant:
const x = 1
//variable:
let y = 9
var z = 2
//------------------------Data Types--------------------------//
let name = "Name"
let arr = ["N","a","m","e"]
//console.log(arr[0])
//------------------------Functions--------------------------//
//Defining function:
function product(x,y,z){
    let result = x*y*z
    console.log(result); 
}
//Executing function:
product(2,3,4)
//Example1:
function printName(name){
    console.log(`Hello ${name}`)
}
//
//Example2:
function verify(input){
    if(input[0] == "S"){
        console.log("Yes");
    }else if(input[0] == "A"){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
verify("Zbdo")