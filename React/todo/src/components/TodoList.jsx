import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
          onSave={(newText) => onEditTodo(todo.id, newText)}
        />
      ))}
    </div>
  );
};

export default TodoList;