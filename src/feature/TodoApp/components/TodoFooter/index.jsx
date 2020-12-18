import React from "react";
import PropTypes from "prop-types";
import TodoFilter from "../TodoFilter";
import "./TodoFooter.scss";
import { VisibilityFilters } from "feature/TodoApp/filterSlice";

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
      <TodoFilter
        filter={VisibilityFilters.SHOW_ALL}
        onFilterClick={onTodoFilterClick}
      />
      <TodoFilter
        filter={VisibilityFilters.SHOW_ACTIVE}
        onFilterClick={onTodoFilterClick}
      />
      <TodoFilter
        filter={VisibilityFilters.SHOW_COMPLETED}
        onFilterClick={onTodoFilterClick}
      />
    </div>
  );
}

export default TodoFooter;
