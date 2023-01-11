// Creating object for storing student details

// const student = {
//     studentName: "Bunny",
//     studentRollNo: 7,
//     studentCourse: "JavaScript",
//     presentAttendance: true,
//     getStudentName() {
//         console.log(`Name of student: ${student.studentName}`)
//     }
    
//     }    

// To print the name of student
// console.log(student.studentName);
// console.log(student['studentName']);

// student.getStudentName();

const student = {
    studentName: "Bunny",
    studentRollNo: 7,
    studentCourse: "JavaScript",
    presentAttendance: true,   
    }  

// Creates a new property in the student object
student.studentMarks = 90;

student.presentAttendanceb = false;

// Remove RollNo property in the object;
delete student.studentRollNo
// Printing Object
console.log(student);
// Below Output: An updated 'student' object

