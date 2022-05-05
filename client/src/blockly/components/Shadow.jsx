import React from 'react';

export function Shadow(p) {
  const { children, ...props } = p;

  props.is = 'blockly';

  return React.createElement('shadow', props, children);
}

export default Shadow;
