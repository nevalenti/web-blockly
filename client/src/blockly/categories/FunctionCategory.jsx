import React from 'react';
import {
  Block,
  Category,
} from '../components';

export function FunctionCategory() {
  return (
    <Category name="Functions" categorystyle="procedure_category">
      <Block type="procedures_defnoreturn" />
      <Block type="procedures_defreturn" />
      <Block type="procedures_mutatorarg" />
      <Block type="procedures_ifreturn" />
    </Category>
  );
}

export default FunctionCategory;
