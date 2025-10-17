// DOM elements - matching the llibary.html file
const bookInput = document.getElementById('bookInput');
const addBookBtn = document.getElementById('addBook');
const bookList = document.getElementById('bookList');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// Load books from localStorage
let books = JSON.parse(localStorage.getItem('books')) || [];

// Function to save books to localStorage
function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}

// Function to render books based on current filter
function renderBooks() {
    bookList.innerHTML = '';
    
    // For now, show all books since the filters in HTML are not properly set up with different data-filter values
    let filteredBooks = books;
    
    filteredBooks.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-item'; 
        bookElement.innerHTML = `
            <span>${book.title}</span>
            <div>
                <button class="borrow-btn">Borrow</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const borrowBtn = bookElement.querySelector('.borrow-btn');
        const deleteBtn = bookElement.querySelector('.delete-btn');
        
        borrowBtn.addEventListener('click', () => {
            toggleBookBorrowedStatus(index);
        });
        
        deleteBtn.addEventListener('click', () => {
            deleteBook(index);
        });

        bookList.appendChild(bookElement);
    });
}

// Function to add a new book
function addBook() {
    const title = bookInput.value.trim();
    
    if(title) {
        books.push({
            title: title,
            borrowed: false,
            id: Date.now()
        });
        
        saveBooks();
        bookInput.value = '';
        bookInput.focus();
        renderBooks(); // Re-render the list to show the new book
    }
}

// Function to toggle book borrowed status
function toggleBookBorrowedStatus(index) {
    books[index].borrowed = !books[index].borrowed;
    saveBooks();
    renderBooks();
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    saveBooks();
    renderBooks();
}

// Event listeners
addBookBtn.addEventListener('click', addBook);
bookInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addBook();
    }
});

// Filter buttons event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        renderBooks();
    });
});

// Initialize the app by rendering books
renderBooks();

