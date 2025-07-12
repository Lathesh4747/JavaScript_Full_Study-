function OuterFn(){
    var a = 10;
    function innerFn(){
        var b = 25;
        console.log(a+b)
    }
    return innerFn;

}

let SomeFn = OuterFn()
SomeFn() // this is clouer function