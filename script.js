let students =[
    {
        studentName: 'John Doe',
        studentFirstGrade: 8,
        studentSecondGrade: 6,
    },
    {
        studentName: 'Jane Doe',
        studentFirstGrade: 7,
        studentSecondGrade: 9,
    },
    {
        studentName: 'Alice Doe',
        studentFirstGrade: 10,
        studentSecondGrade: 10,
    }
]

function averageStudentGrade(student){
    let average = (student.studentFirstGrade + student.studentSecondGrade) / 2
    return average
}

function getStudentAverageGrade(student){
    let average = averageStudentGrade(student)
    if (average >= 7){
        console.log(`The student ${student.studentName} is approved with the average grade of ${average}`)
    } else {   
        console.log(`The student ${student.studentName} is reproved with the average grade of ${average}`)
    }
}

for (student of students){
    getStudentAverageGrade(student)
}