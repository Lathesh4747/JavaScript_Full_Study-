//
//Three type of Key words Avaiable in javascirpt 
//
//var , const, let
function CheckingNameVariable(){
    var name1 = "I am in Function"
    if (true){
        console.log(name1); // You can access this function scope variable in this if block.. Coz, When you use var keyword in variable.. that timeJavaScirpt Convert that variable to that function globel scope Global Scope
    }
}
CheckingNameVariable();
