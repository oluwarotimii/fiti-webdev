# JavaScript Arrays and Objects: Student Management System

This project demonstrates practical use of JavaScript arrays and objects in a web application context. Below is a breakdown of all the methods and concepts used.

## Arrays

### What are Arrays?
Arrays are list-like objects that store multiple values in a single variable. They are indexed collections where each item has a position (index) starting from 0.

### Array Declaration
```javascript
let students = [
    { name: "Alice Johnson", age: 16, grade: "A" },
    { name: "Bob Smith", age: 17, grade: "B" },
    { name: "Carol Davis", age: 16, grade: "A+" }
];
```

### Array Methods Used in This Project

#### 1. `push()` - Adding Elements
- **Purpose**: Adds one or more elements to the end of an array
- **Usage**: `students.push(newStudent);`
- **Effect**: Increases array length by 1

#### 2. `splice()` - Removing Elements
- **Purpose**: Removes elements from an array and/or adds new elements
- **Usage**: `students.splice(index, 1);`
- **Parameters**: 
  - `index`: position to start removing
  - `1`: number of elements to remove
- **Effect**: Modifies original array

#### 3. `forEach()` - Iterating Through Array
- **Purpose**: Executes a function for each array element
- **Usage**: `students.forEach((student, index) => { ... });`
- **Parameters**:
  - `student`: current element in iteration
  - `index`: current index of element

#### 4. `reduce()` - Calculating Values
- **Purpose**: Reduces array to a single value
- **Usage**: `students.reduce((sum, student) => sum + student.age, 0)`
- **Parameters**:
  - `(sum, student) => sum + student.age`: function to reduce elements
  - `0`: initial value for sum
- **Effect**: Returns average age calculation

#### 5. `length` - Getting Array Size
- **Purpose**: Returns number of elements in array
- **Usage**: `students.length`
- **Effect**: Returns total count of students

## Objects

### What are Objects?
Objects are collections of key-value pairs. Each key (property) maps to a value which can be a string, number, function, or another object.

### Object Declaration
```javascript
const newStudent = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    grade: gradeInput.value
};
```

### Object Properties Used
- `name`: string property
- `age`: number property
- `grade`: string property

### Object Method Used

#### 1. `Object.entries()` - Object to Array
- **Purpose**: Returns array of object's key-value pairs
- **Usage**: `Object.entries(gradesCount)`
- **Effect**: Converts object to array of [key, value] arrays

## DOM Manipulation Methods

### 1. `getElementById()`
- **Purpose**: Selects an element by its ID
- **Usage**: `document.getElementById('studentList')`

### 2. `createElement()`
- **Purpose**: Creates a new HTML element
- **Usage**: `document.createElement('li')`

### 3. `appendChild()`
- **Purpose**: Adds a child element to parent
- **Usage**: `studentList.appendChild(li)`

### 4. `innerHTML`
- **Purpose**: Sets or gets HTML content inside an element
- **Usage**: `studentList.innerHTML = '';`

### 5. `addEventListener()`
- **Purpose**: Attaches event handler to element
- **Usage**: `form.addEventListener('submit', addStudent)`

## Other JavaScript Methods Used

### 1. `parseInt()`
- **Purpose**: Converts string to integer
- **Usage**: `parseInt(ageInput.value)`

### 2. `toFixed()`
- **Purpose**: Formats number to specific decimal places
- **Usage**: `(average).toFixed(1)`

### 3. `map()` - Array Transformation
- **Purpose**: Creates new array by transforming each element
- **Usage**: `array.map(item => ...)`

## How Arrays and Objects Work Together

In this project:
- The `students` array holds multiple student objects
- Each student object has properties like name, age, and grade
- We use array methods to manipulate the collection of objects
- We access object properties to display individual student information

## IMPORTANT !

1. Arrays are ideal for storing collections of similar items
2. Objects are perfect for representing entities with multiple properties
3. Array methods like `forEach`, `push`, and `splice` make data manipulation easier
4. Objects allow us to group related data together in a structured way
5. Combining arrays and objects creates powerful data structures for real-world applications