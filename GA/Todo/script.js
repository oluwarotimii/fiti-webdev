let todos = [];

// DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const clearAllBtn = document.getElementById('clear-all');

// Load todos from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    renderTodos();
});

// Add new todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const text = todoInput.value.trim();
    if (text) {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        todoInput.value = '';
    }
});

// Toggle todo completion status
function toggleComplete(id) {
    todos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    saveTodos();
    renderTodos();
}

// Delete a todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// Clear all todos
clearAllBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all todos?')) {
        todos = [];
        saveTodos();
        renderTodos();
    }
});

// Render todos to the DOM
function renderTodos() {
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
     
        
        if (todo.completed) {
            li.classList.add('completed');
        }
        
        const todoText = document.createElement('span');
        todoText.className = 'todo-text';
        todoText.textContent = todo.text;
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn-complete';
        completeBtn.textContent = todo.completed ? 'Undo' : 'Complete';
        completeBtn.addEventListener('click', () => toggleComplete(todo.id));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
        
        li.appendChild(todoText);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
}