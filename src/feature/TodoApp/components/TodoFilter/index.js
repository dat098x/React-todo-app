import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

TodoFilter.propTypes = {
  value: PropTypes.string,
  onFilterClick: PropTypes.func,
};

TodoFilter.defaultProps = {
  value: 'All',
  onFilterClick: null,
}

function TodoFilter(props) {
  const { onFilterClick, value } = props
  const handleFilterClick = () => {
    if (onFilterClick) onFilterClick(value);
  }
  return (
    <Button
      onClick={handleFilterClick}>
      {value}</Button>
  );
}

export default TodoFilter;