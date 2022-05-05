import React from 'react';
import {
  Block,
  Category,
} from '../components';

export function ListCategory() {
  return (
    <Category name="Lists" categorystyle="list_category">
      <Block type="lists_create_empty" />
      <Block type="lists_repeat" />
      <Block type="lists_reverse" />
      <Block type="lists_isEmpty" />
      <Block type="lists_length" />
      <Block type="lists_create_with" />
      <Block type="lists_create_with_container" />
      <Block type="lists_create_with_item" />
      <Block type="lists_indexOf" />
      <Block type="lists_getIndex" />
      <Block type="lists_setIndex" />
      <Block type="lists_getSublist" />
      <Block type="lists_sort" />
      <Block type="lists_split" />
    </Category>
  );
}

export default ListCategory;
