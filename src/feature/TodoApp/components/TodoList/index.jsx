import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoEditClick: PropTypes.func,
  onTodoRemoveClick: PropTypes.func,
  onTodoCompletedClick: PropTypes.func,
};

TodoList.defaultProps = {
  photoList: [],
  onTodoEditClick: null,
  onTodoRemoveClick: null,
  onTodoCompletedClick: null,
};

function TodoList(props) {
  const {
    todoList,
    onTodoEditClick,
    onTodoRemoveClick,
    onTodoCompletedClick,
  } = props;
  return (
    <div className="todo-list">
      {todoList.map((todo) => (
        <Todo
          key={todo.title}
          todo={todo}
          onEditClick={onTodoEditClick}
          onRemoveClick={onTodoRemoveClick}
          onCompletedClick={onTodoCompletedClick}
        />
      ))}
    </div>
  );
}

export default TodoList;
