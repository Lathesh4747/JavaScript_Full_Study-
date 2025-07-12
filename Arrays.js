//Array
// we can add any type of datatype value 
let colors = ['red','blue','Green' , 1,2,3, true] // Array Create 
let color = new Array('r','e') //Array Create 
//View array value use index
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])

// Update Array Value use index
//Before Update
console.log(colors)
colors[0] = 'pink'
//After Update 
console.log(colors)

// Array methods and props
// props
console.log(colors.length)
if (Boolean(colors.length)){
    console.log('We have colors')
}
else {
    console.log('We do not have colors')

}

//Methods 
// Push Methods

    colors.push("Yellow")
    console.log(colors) // Add new value in array. but this value coming in last value 

    //unshift method 
    colors.unshift("Yellow1")
    console.log(colors) // it's also add value in array but add first value of array 

// pop method
colors.pop() //remove last value of array 
console.log(colors)
//shift mehtod
colors.shift() // remove first value of array 
console.log(colors)

//get value's index number 
//indexof
console.log(colors.indexOf('pink')) //this is 0 index 

//ForEach Function 
let number  = [1,2,3,4,5,6,7,8,9]
number.forEach(function(element){
    console.log(element)
}) //this function type of call back function... when forEach Function get values in array that time this class back function work every values


//map function 
let returnvalue =  colors.map((element)=>{
    return(element+' 123')
})
console.log(returnvalue)


// Example for map function 
const prices = [1,5,23,5,2,6,2,5]
//this is call back function 
prices.map(function (prices){
 console.log (prices - 1)
})

// this is arrow function and this also call back function 
prices.map ((prices) =>{
    console.log(prices-1)
})

prices.forEach(function(prices)
{
console.log(prices-1)

})

prices.forEach ((prices)=>{
    console.log (prices-1)
})

//all most map function and foreach  function also same... but some usage have avaiable 

//filter methods
var numbers = [1,2,78,5,2,54,5,12,123,123,]
let checkingboolenvalue = numbers.filter((number)=>{
    return number>7
})

console.log(checkingboolenvalue) 

//Checking Filter Method for Object
var checking = [
    {name:'vijay',age:34},
    {name:'vijay1',age:3},
    {name:'vijay12',age:342},
    {name:'vijay123',age:343},

]
  checkingboolenvalue =checking.filter(function(obj){
    return obj.age >10
})

console.log(checkingboolenvalue)

//find  method
 checkingboolenvalue =  numbers.find(function(num){
    return num > 0
})

console.log(checkingboolenvalue)

//some (if have or if no have)
checkingboolenvalue = numbers.some(function(n){
    return  n > 30
})
console.log(checkingboolenvalue)

//reduce it's like sum in excel 
const num = [1,2,5,4,2,1,5,5,2,5,4,2,5,1,56,5,2]
 checkingboolenvalue =  num.reduce((start , end )=>{
    return start+ end
},0)
// start - > 0 end -> 1
// start - > 1 end ->2
// start - > 3 end ->5

console.log(checkingboolenvalue)