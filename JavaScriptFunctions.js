//Normal Function 
function SayHello(){
    console.log('Hello')
}
SayHello();

//parameters
function SayHello(message){
    console.log(message)
}
SayHello('I am meesage')

//return function 
returnThisFunction = SayHello('hi')
console.log(returnThisFunction) // not error javascript gives undefinied 

//return use in function
function add( a,b )
{
    return a+b
}

console.log(add()) 
numb = add(4,3)
console.log(numb)

//How to use return key word properly
function ad (a,b){
    if (a&&b){
        return a+b
    }
    else{
        return 'please enter the value for a and b '
    }

}

console.log(ad())


// this name is call back function 
// function(message){

// }

// // this is arrow function.. this is also call back function 
// ()=>{

// }
// this useage in Array.js check it 
