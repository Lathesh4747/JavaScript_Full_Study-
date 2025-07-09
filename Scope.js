///
///Three type of scope in this javascript 
///Global Scope 
///Block Scope 
///Function Scope
///
//Global Scope
const name1 = 'Lathesh'
function GlobalScope(){
    console.log(name1)
}

GlobalScope();
console.log(name1);

//Block Scope 

function CheckBlockScope(){
    if (true){
        let name = 'Lathesh in Block';
        console.log(name)
    }
}

CheckBlockScope()

//Function Scope 
function CheckFunctionScope(){
    let name = "I am in Main Function"
    function InSubFunction(){
        let name = "I am in first sub  function"
        console.log(name)
    }
    InSubFunction()
    console.log(name)

}
CheckFunctionScope();