import React from 'react';
import {
  Block,
  Category,
} from '../components';

export function LogicCategory() {
  return (
    <Category name="Logic" categorystyle="logic_category">
      <Block type="logic_null" />
      <Block type="logic_boolean" />
      <Block type="logic_negate" />
      <Block type="logic_operation" />
      <Block type="logic_compare" />
      <Block type="controls_ifelse" />
      <Block type="logic_ternary" />
    </Category>
  );
}

export default LogicCategory;
