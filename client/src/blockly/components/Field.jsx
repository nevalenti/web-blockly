import React from 'react';

export function Field(p) {
  const { children, ...props } = p;

  props.is = 'blockly';

  return React.createElement('field', props, children);
}

export default Field;
