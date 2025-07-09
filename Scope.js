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