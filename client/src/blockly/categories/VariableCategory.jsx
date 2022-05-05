import React from 'react';
import {
  Block,
  Category,
} from '../components';

export function VariableCategory() {
  return (
    <Category name="Variables" categorystyle="variable_category">
      <button
        text="Create a variable..."
        type="button"
        callbackkey="createVariable"
      >
        wow
      </button>
      <Block type="variables_get_dynamic" />
      <Block type="variables_set_dynamic" />
    </Category>
  );
}

export default VariableCategory;
