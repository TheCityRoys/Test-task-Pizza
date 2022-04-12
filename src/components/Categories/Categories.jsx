import React, { useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';

const Categories = React.memo(function Categories({ items, activeCategory, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? 'active' : ''}>
          Все
        </li>

        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
              className={activeCategory === index ? 'active' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

// Categories.propTypes = {
//   activeCategory: PropTypes.number.isRequired,
//   items: arrayOf(PropTypes.object).isRequired,
//   onSelectCategory: PropTypes.func.isRequired,
// };

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
