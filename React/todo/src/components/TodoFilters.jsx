const TodoFilters = ({ filter, onFilterChange, activeCount, onClearCompleted, hasCompleted }) => {
  return (
    <div className="todo-filters mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="todo-count">
          {activeCount} {activeCount === 1 ? 'item' : 'items'} left
        </div>
        <div className="btn-group" role="group">
          <button
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onFilterChange('all')}
          >
            All
          </button>
          <button
            className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onFilterChange('active')}
          >
            Active
          </button>
          <button
            className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onFilterChange('completed')}
          >
            Completed
          </button>
        </div>
        {hasCompleted && (
          <button
            className="btn btn-outline-danger"
            onClick={onClearCompleted}
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoFilters;