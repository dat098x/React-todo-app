import React from "react";
import PropTypes from "prop-types";
import TodoFilter from "../TodoFilter";
import "./TodoFooter.scss";

TodoFooter.propTypes = {
  onTodoFilterClick: PropTypes.func,
};

TodoFooter.defaultProps = {
  onTodoFilterClick: null,
};

function TodoFooter(props) {
  const { onTodoFilterClick } = props;
  return (
    <div className="todo__footer">
      <TodoFilter value={"ALL"} onFilterClick={onTodoFilterClick} />
      <TodoFilter value={"ACTIVE"} onFilterClick={onTodoFilterClick} />
      <TodoFilter value={"COMPLETED"} onFilterClick={onTodoFilterClick} />
    </div>
  );
}

export default TodoFooter;
