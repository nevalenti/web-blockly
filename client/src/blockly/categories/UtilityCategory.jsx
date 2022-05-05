import React from 'react';
import {
  Block,
  Category,
} from '../components';

import '../blocks/utility';

export function UtilityCategory() {
  return (
    <Category name="Utilities" categorystyle="utility_category">
      <Block type="print" />
    </Category>
  );
}

export default UtilityCategory;
