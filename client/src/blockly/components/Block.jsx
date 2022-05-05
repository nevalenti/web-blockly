import React from 'react';

export function Block(p) {
  const { children, ...props } = p;

  props.is = 'blockly';

  return React.createElement('block', props, children);
}

export default Block;
