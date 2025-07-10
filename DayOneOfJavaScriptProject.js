const student=[
    {
        Username:'Lathesh',
        Password:'Lathesh@@@123',
        Marks:'75'
    },
     {
        Username:'Lathesh1',
        Password:'Lathesh@@@1234',
        Marks:'75'
    },
     {
        Username:'Lathesh2',
        Password:'Lathesh@@@1235',
        Marks:'75'
    },
     {
        Username:'Lathesh3',
        Password:'Lathesh@@@1236',
        Marks:'75'
    }

]

function loginChecking(username, passowrd){


    student.forEach(element => {
        if (element.Username==username && element.Password == passowrd){
            console.log('Login Successfull')
             marks = element.Marks-'0';
            if (marks>=75){
                console.log('Scope is [A]')
            }
            else if (marks>=65){
                console.log('Scope is [B]')

            }
            else if (marks>=50){
                console.log('Scope is [C]')

            }
            else if (marks>=35){
                console.log('Scope is [D]')

            }
            else {
                console.log('Scope is [W]')

            }
            
        }
    });
    console.log(`Name :${username} Password:${passowrd} Marks:${marks}`) 
}
loginChecking('Lathesh','Lathesh@@@123')


// const student = [
//   { Username: 'Lathesh', Password: 'Lathesh@@@123', Marks: '75' },
//   { Username: 'Lathesh1', Password: 'Lathesh@@@1234', Marks: '65' },
//   { Username: 'Lathesh2', Password: 'Lathesh@@@1235', Marks: '52' },
//   { Username: 'Lathesh3', Password: 'Lathesh@@@1236', Marks: '30' }
// ];

// function loginChecking(username, password) {
//   let isLoggedIn = false;

//   student.forEach(element => {
//     if (element.Username === username && element.Password === password) {
//       isLoggedIn = true;

//       let marks = Number(element.Marks); // or parseInt()

//       console.log('✅ Login Successful');
//       console.log(`👤 Name: ${element.Username}`);
//       console.log(`📊 Marks: ${marks}`);

//       if (marks >= 75) console.log('🎓 Grade: [A]');
//       else if (marks >= 65) console.log('🎓 Grade: [B]');
//       else if (marks >= 50) console.log('🎓 Grade: [C]');
//       else if (marks >= 35) console.log('🎓 Grade: [D]');
//       else console.log('❌ Grade: [W]');
//     }
//   });

//   if (!isLoggedIn) {
//     console.log('❌ Invalid Username or Password');
//   }
// }

// loginChecking('Lathesh', 'Lathesh@@@123');


