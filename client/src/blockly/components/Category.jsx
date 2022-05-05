import React from 'react';

export function Category(p) {
  const { children, ...props } = p;

  props.is = 'blockly';

  return React.createElement('category', props, children);
}

export default Category;
