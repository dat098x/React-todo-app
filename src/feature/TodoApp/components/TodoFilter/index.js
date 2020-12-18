import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

TodoFilter.propTypes = {
  filter: PropTypes.string,
  onFilterClick: PropTypes.func,
};

TodoFilter.defaultProps = {
  filter: "SHOW_ALL",
  onFilterClick: null,
};

function TodoFilter(props) {
  const { onFilterClick, filter } = props;
  const visibilityFilter = useSelector((state) => state.visibilityFilter);

  const handleFilterClick = () => {
    if (onFilterClick) onFilterClick(filter);
  };
  return (
    <Button onClick={handleFilterClick} disabled={filter === visibilityFilter}>
      {filter}
    </Button>
  );
}

export default TodoFilter;
