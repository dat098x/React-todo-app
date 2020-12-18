import React, { useState } from "react";
import PropTypes from "prop-types";

import TodoForm from "../TodoForm";
import "./TodoHeader.scss";
import { Button } from "reactstrap";

TodoHeader.propTypes = {
  onSubmit: PropTypes.func,
  onTodoCompletedAllClick: PropTypes.func,
};

TodoHeader.defaultProps = {
  onSubmit: null,
  onTodoCompletedAllClick: null,
};

function TodoHeader(props) {
  const { onSubmit, onTodoCompletedAllClick } = props;
  const [isCompletedAll, setIsCompletedAll] = useState(false);
  const initialValues = {
    title: "",
  };
  const handleCompletedAllCLick = () => {
    if (onTodoCompletedAllClick) onTodoCompletedAllClick(isCompletedAll);
    setIsCompletedAll(!isCompletedAll);
  };
  return (
    <div className="todo-header">
      <div className="todo-add__form">
        <TodoForm initialValues={initialValues} onSubmit={onSubmit} />
        <Button onClick={handleCompletedAllCLick}>Completed All</Button>
      </div>
    </div>
  );
}

export default TodoHeader;
