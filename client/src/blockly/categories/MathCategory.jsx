import React from 'react';
import {
  Block,
  Category,
} from '../components';

export function MathCategory() {
  return (
    <Category name="Math" categorystyle="math_category">
      <Block type="math_number" />
      <Block type="math_arithmetic" />
      <Block type="math_single" />
      <Block type="math_trig" />
      <Block type="math_constant" />
      <Block type="math_number_property" />
      <Block type="math_round" />
      <Block type="math_on_list" />
      <Block type="math_modulo" />
      <Block type="math_constrain" />
      <Block type="math_random_int" />
      <Block type="math_random_float" />
    </Category>
  );
}

export default MathCategory;
