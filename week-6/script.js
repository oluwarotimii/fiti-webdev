// An array of student objects
let students = [
    { name: "Alice Johnson", age: 16, grade: "A" },
    { name: "Bob Smith", age: 17, grade: "B" },
    { name: "Carol Davis", age: 16, grade: "A+" }
]; 


// Function to display students
function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${student.name}</strong> - Age: ${student.age}, Grade: ${student.grade}
            <button onclick="removeStudent(${index})" style="float: right; background-color: #dc3545;">Remove</button>
        `;
        studentList.appendChild(li);
    });
}




// Function to add a new student
function addStudent(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const gradeInput = document.getElementById('grade');
    
    const newStudent = {
        name: nameInput.value,
        age: parseInt(ageInput.value),
        grade: gradeInput.value
    };
    
    students.push(newStudent);
    
    // Reset form
    document.getElementById('studentForm').reset();
    console.log(newStudent)
    // Update display
    // displayStudents();
    // updateStats();
}

// Function to remove a student
function removeStudent(index) {
    students.splice(index, 1);
    displayStudents();
    updateStats();
    // students.pop()
}



// Function to update stat
function updateStats() {
    const totalStudents = students.length;
    const averageAge = (students.reduce((sum, student) => sum + student.age, 0) / totalStudents).toFixed(1);
    
    const gradesCount = {};
    students.forEach(student => {
        if (gradesCount[student.grade]) {
            gradesCount[student.grade]++;
        } else {
            gradesCount[student.grade] = 1;
        }
    });
    
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = ` 
        <p><strong>Total Students:</strong> ${totalStudents}</p>
        <p><strong>Average Age:</strong> ${averageAge}</p>
        <p><strong>Grade Distribution:</strong></p>
        <ul>
            ${Object.entries(gradesCount).map(([grade, count]) => 
                `<li>${grade}: ${count} student(s)</li>`
            ).join('')}
        </ul>
    `;
}

// Add event listener to the form
document.getElementById('studentForm').addEventListener('submit', addStudent);


// Initialize the page
displayStudents();
updateStats();
