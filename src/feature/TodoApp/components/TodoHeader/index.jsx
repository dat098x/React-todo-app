import React from "react";
import PropTypes from "prop-types";

import TodoForm from "../TodoForm";
import "./TodoHeader.scss";

TodoHeader.propTypes = {
  onSubmit: PropTypes.func,
};

TodoHeader.defaultProps = {
  onSubmit: null,
};

function TodoHeader(props) {
  const { onSubmit } = props;
  const initialValues = {
    title: "",
  };

  return (
    <div className="todo-header">
      <div className="todo-add__form">
        <TodoForm initialValues={initialValues} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default TodoHeader;
