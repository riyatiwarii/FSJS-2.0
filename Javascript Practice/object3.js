// const student = {
//     studentName: "Bunny",
//     studentCourse: "JavaScript",
//     presentAttendance: true,
//     studentMarks: 90,
//     getMarks() {
//         console.log(`Name of student: ${student.studentMarks}`)
//     }
//     getMarks : function (){
//         console.log(`Name of student: ${student.studentMarks}`)
//     }
//     } 

    // student.getMarks();

    // const student = {
    //     studentMarks: {
    //         passMarks: 40,
    //         failMarks: 30,
    //         marksGrade:{
    //             above80: 'A',
    //             below70: 'B',
    //             below60: 'C'
    //         }
    //     }
    // }

    // console.log(student);
    // console.log(student.studentMarks.passMarks);
    // console.log(student.studentMarks.marksGrade);

    const team= {
        teamMembers:{
            member1:{
                role: 'frontend',
                id: 101
            },
            member2:{
                role: 'backend',
                id: 102
            },
            member3:{
                role: 'data-analyst',
                id: 103
            },
            member4:{
                role: 'data-engineer',
                id: 104
            },
        }
    }

  for (const i in team.teamMembers){
      
        console.log(`${i} : ${team.teamMembers[i].role}`)   

    }