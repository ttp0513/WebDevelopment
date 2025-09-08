// 1. Init Student Array
let students = [];

// 2. Function to add a student
function addStudent(name, grade) {
    const student = { name, grade };
    students.push(student);
    console.log(`Added student: ${name}, Grade: ${grade}`);
}   

// 3. Function to remove a student by name
function removeStudent(name, grade) {
    if (students.length === 0) {
        return console.log("No students to remove");
    }
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Removed student: ${name}`);
    } else {
        console.log(`Student ${name} not found`);
    }           
}

// 4. Function to filter students by minimum grade
function filterStudentsByGrade(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// 5. Function to map student data into formatted list
function mapStudentData() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}

// Example usage:
addStudent("Alice", 85);
addStudent("Bob", 92);
addStudent("Charlie", 78);


console.log("Student List");
console.log(mapStudentData());


console.log("Students with grade >= 80:", filterStudentsByGrade(80));
removeStudent("Bob");

console.log("All Students after removal:", students);