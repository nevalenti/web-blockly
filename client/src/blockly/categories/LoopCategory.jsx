import React from 'react';
import {
  Block,
  Category,
} from '../components';

export function LoopCategory() {
  return (
    <Category name="Loops" categorystyle="loop_category">
      <Block type="controls_for" />
      <Block type="controls_forEach" />
      <Block type="controls_whileUntil" />
      <Block type="controls_flow_statements" />
    </Category>
  );
}

export default LoopCategory;
