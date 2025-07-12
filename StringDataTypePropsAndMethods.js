let text = 'Hello World!'
console.log(text.length) // Properties
console.log(text.toUpperCase()) // Convert to uppercase Method
console.log(text.toLowerCase())//Convert to lowercase Method 
console.log(text.charAt(6)) //6 th index charcter finding
console.log(text.substring(0,5)) // start index - 0 , end index - 5
text = "Learn JavaScript, javaScipt is Fun"
console.log(`
${ text.indexOf("JavaScript") }
${text.lastIndexOf("JavaScript")}
    `)

text = "I Love Python with code"
console.log(text.replace('Python','JavaScript'))
console.log(text)

text = 'Example For text method split'
console.log(text.split(" "))

text = "Example for trim method        "
console.log(text.trim())

