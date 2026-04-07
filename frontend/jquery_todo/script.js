$(document).ready(function() {
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark-mode');
        $('#themeToggle').text('Light Mode');
    }

    // Check for saved todos
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(todo => {
        addTodoToDOM(todo.text, todo.completed, todo.id);
    });
    updateStats();

    // Add new todo
    $('#addBtn').click(function() {
        addNewTodo();
    });

    // Add new todo on Enter key
    $('#todoInput').keypress(function(e) {
        if (e.which === 13) { // Enter key
            addNewTodo();
        }
    });

    // Toggle theme
    $('#themeToggle').click(function() {
        $('body').toggleClass('dark-mode');
        
        if ($('body').hasClass('dark-mode')) {
            $(this).text('Light Mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            $(this).text('Dark Mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Function to add a new todo
    function addNewTodo() {
        const todoText = $('#todoInput').val().trim();
        
        if (todoText === '') {
            alert('Please enter a todo item');
            return;
        }

        // Create a unique ID
        const id = Date.now().toString();
        
        // Add to DOM
        addTodoToDOM(todoText, false, id);
        
        // Save to localStorage
        saveTodos();
        
        // Update stats
        updateStats();
        
        // Clear input
        $('#todoInput').val('');
    }

    // Function to add todo to DOM
    function addTodoToDOM(text, completed, id) {
        const todoClass = completed ? 'todo-item completed' : 'todo-item';
        
        const todoHtml = `
            <li class="${todoClass}" data-id="${id}">
                <button class="complete-btn">${completed ? 'Undo' : 'Complete'}</button>
                <span class="todo-text">${text}</span>
                <button class="delete-btn">Delete</button>
            </li>
        `;
        
        $('#todoList').prepend(todoHtml);
        
        // Add event listeners to the new elements
        $(`[data-id="${id}"] .complete-btn`).click(function() {
            $(this).closest('.todo-item').toggleClass('completed');
            $(this).text($(this).text() === 'Complete' ? 'Undo' : 'Complete');
            saveTodos();
            updateStats();
        });
        
        $(`[data-id="${id}"] .delete-btn`).click(function() {
            $(this).closest('.todo-item').fadeOut(300, function() {
                $(this).remove();
                saveTodos();
                updateStats();
                
                // Show empty state if no todos
                if ($('#todoList').children().length === 0) {
                    $('#todoList').append('<div class="empty-state">No tasks yet. Add one above!</div>');
                }
            });
        });
        
        // Remove empty state if it exists
        $('.empty-state').remove();
    }

    // Function to save todos to localStorage
    function saveTodos() {
        const todos = [];
        $('.todo-item').each(function() {
            const id = $(this).data('id');
            const text = $(this).find('.todo-text').text();
            const completed = $(this).hasClass('completed');
            todos.push({ id, text, completed });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Function to update statistics
    function updateStats() {
        const total = $('.todo-item').length;
        const completed = $('.todo-item.completed').length;
        const pending = total - completed;
        
        $('#totalTodos').text(total);
        $('#completedTodos').text(completed);
        $('#pendingTodos').text(pending);
    }

    // Show empty state if no todos exist
    if ($('#todoList').children().length === 0) {
        $('#todoList').append('<div class="empty-state">No tasks yet. Add one above!</div>');
    }
});



