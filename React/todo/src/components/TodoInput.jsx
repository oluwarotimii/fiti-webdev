import { useState } from 'react';


const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <form 
   
    onSubmit={handleSubmit} 
    className="todo-input-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
};

export default TodoInput;
