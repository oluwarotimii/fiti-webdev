import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter todos based on selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  // Count active todos
  const activeTodoCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoInput onAddTodo={addTodo} />
        {todos.length > 0 && (
          <>
            <TodoList 
              todos={filteredTodos} 
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
              onEditTodo={editTodo}
            />
            <TodoFilters 
              filter={filter}
              onFilterChange={setFilter}
              activeCount={activeTodoCount}
              onClearCompleted={clearCompleted}
              hasCompleted={todos.some(todo => todo.completed)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
