const a = 42 
const b ='Lathesh'
const c = null
const d = 43
const e = ''

console.log(a||b)
console.log(a&&d)
console.log(c&&d)
console.log(b&&d)

// 
// If you compare any value use && -> this operator return secound one
// add the same time if you use || -> this operator return first one 
//


// Best Example 
function  greet (name){
    console.log(`Hello ${name||'Visitor'}`)
}
greet()
greet ('Lathesh')

function  greet (name){
    console.log(`Hello ${name&&'Visitor'}`)
}
greet()
greet ('Lathesh')



