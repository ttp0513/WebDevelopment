// 1. Init Student Array
let students = [];

// 2. Function to add a student
function addStudent(name, grade) {
    const student = { name, grade };
    students.push(student);
    console.log(`Added student: ${name}, Grade: ${grade}`);
    renderStudentList();
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
    renderStudentList();
}

// 4. Function to filter students by minimum grade
function filterStudentsByGrade(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// 5. Function to map student data into formatted list
function mapStudentData() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}

// 6. Function to display output on web
function renderStudentList(filtered = null) {
    const list = document.getElementById("allStudents");
    list.innerHTML = "";
    const data = filtered || mapStudentData();
    data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
    });
    }

    function handleAddStudent() {
      const name = document.getElementById("addName").value;
      const grade = parseInt(document.getElementById("addGrade").value);
      if (name && !isNaN(grade)) {
        addStudent(name, grade);
      }
    }

    function handleRemoveStudent() {
      const name = document.getElementById("removeName").value;
      if (name) {
        removeStudent(name);
      }
    }

    function handleFilterStudents() {
      const minGrade = parseInt(document.getElementById("minGrade").value);
      if (!isNaN(minGrade)) {
        const filtered = filterStudentsByGrade(minGrade).map(student => `${student.name} - Grade: ${student.grade}`);
        renderStudentList(filtered);
      }
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