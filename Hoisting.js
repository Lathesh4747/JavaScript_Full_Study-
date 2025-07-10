//
//Function Scope and Block Scope Only Use in Function and  Block.. 
//But If you no use any variable type key words front function and block scope variable.. that Variable will be convert to global Scope by JavaScript
//

function CheckHoisting(){
    a = 10 
    let b = 20
    console.log(b)
}
CheckHoisting();
console.log(a); // You can Access that Function Scope Variable.. Coz, Now It's Global Scope Variable
console.log(b); // undefined -> this is work like functional scope 