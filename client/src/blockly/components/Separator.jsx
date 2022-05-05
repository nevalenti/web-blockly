import React from 'react';

export function Separator(p) {
  const { children, ...props } = p;

  props.is = 'blockly';

  return React.createElement('sep', props, children);
}

export default Separator;
