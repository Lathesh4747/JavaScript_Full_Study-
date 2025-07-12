let student =[]
function AddStudent(name , marks){
    let studentname = String(name).toUpperCase();
    student.push(
        {
            name:studentname,
            marks:marks,
            score:CheckingScores(marks)
        }
    )
    
}
function CheckingScores(marks){
    if (Boolean(marks)){
        if (marks>=75){
            return 'A'
        }
        else if (marks>=65){
            return 'B'
        }
        else if (marks>=50){
            return 'C'
        }
        else if (marks >=35){
            return 'S'
        }
        else{
            return 'F'
        }
    }else{
        console.log('send your marks in parameter')
    }
}

function SearchStudents(studentname){
var Searchingstudent = studentname.toUpperCase();
return student.find((name)=>{
    return name.name == Searchingstudent;
})
}
function Checkingfails(){
    console.log('Any Failure')
    if (student.some((studentdetails)=>{
         return studentdetails.score == 'F'
    })){
        console.log('yes some student fail')
    }
}
AddStudent('Lathesh','90')
AddStudent('Lathesh 1','60')
AddStudent('Lathesh 3','40')
AddStudent('Lathesh 4','10')
console.log(
    
    `
            Student Data 
            All Student with grade
    `
)
student.map(function(student){
    console.log(`
        
        Name      |     Marks     |  Score
        ${student.name}         ${student.marks}          ${student.score}
        `)
})

 let filteredStudents =  student.filter(function(TopScoreStudentsObj){
    return TopScoreStudentsObj.score == 'A'
})

console.log(`
    Top Score Students
    ${filteredStudents}
    `)
SearchStudents('Lathesh')
Checkingfails()

