import React from 'react';

export function Value(p) {
  const { children, ...props } = p;

  props.is = 'blockly';

  return React.createElement('value', props, children);
}

export default Value;
