const bookInput = document.getElementById('bookInput')
const addtaskbtn = document.getElementById('addtaskbtn')

let currentFilter = 'all';

let books = JSON.parse(localStorage.getItem('books')) || [];


function saveBooks(){
    localStorage.setItem('books' , JSON.stringify(books));
}

  filteredTasks.forEach((books, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = `task ${books.completed ? 'completed' : ''}`;
        taskElement.innerHTML = `
        <span>${books.text}</span>
        <div>
        <button class="complete-button">${books.completed ? 'Undo' : 'Complete'}</button>
        <button class = "delete-btn">Delete</button>
        </div>
        `;

        const toggleBtn = taskElement.querySelector('.complete-button');
        const deleteBtn = taskElement.querySelector('.delete-btn');
        
        toggleBtn.addEventListener('click', () => {
            toggleBookBorrowedStatus(index);
        });
        deleteBtn.addEventListener('click', () => {
            deleteBook(index);
        });

        taskList.appendChild(taskElement);
    });w

    function addTask(){
    const text = bookInput.value.trim();
     
    if(text){
        books.push({
            text: text,
            completed: false,
            id: Date.now()
        });

        saveBooks();
        bookInput.value = '';
        bookInput.focus();
    }
}
addtaskbtn.addEventListener('click', addTask);
bookInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addTask();
    }
});