import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "reactstrap";

import "./Todo.scss";

Todo.propTypes = {
  todo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onCompletedClick: PropTypes.func,
};

Todo.defaultProps = {
  todo: {},
  onEditClick: null,
  onRemoveClick: null,
  onCompletedClick: null,
};

function Todo(props) {
  const { todo, onEditClick, onRemoveClick, onCompletedClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(todo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(todo);
  };

  const handleCompletedClick = () => {
    if (onCompletedClick) onCompletedClick(todo);
  };
  return (
    <div className="todo">
      <Row>
        <Col md={6}>
          <div
            className={
              todo.isCompleted ? "todo__text--isCompleted" : "todo__text"
            }
          >
            <h2 className="todo__text--title">{todo.title}</h2>
            <span className="todo__text--description" onClick={handleEditClick}>
              {todo.description}
            </span>
          </div>
        </Col>
        <Col md={6} className="todo__colbtn">
          <div className="todo__btn">
            <Button color="success" onClick={handleCompletedClick}>
              Completed
            </Button>
            <Button color="danger" onClick={handleRemoveClick}>
              Delete
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Todo;
