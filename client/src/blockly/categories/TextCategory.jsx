import React from 'react';
import {
  Block,
  Category,
} from '../components';

export function TextCategory() {
  return (
    <Category name="Text" categorystyle="text_category">
      <Block type="text" />
      <Block type="text_multiline" />
      <Block type="text_join" />
      <Block type="text_create_join_container" />
      <Block type="text_create_join_item" />
      <Block type="text_append" />
      <Block type="text_length" />
      <Block type="text_isEmpty" />
      <Block type="text_indexOf" />
      <Block type="text_charAt" />
      <Block type="text_getSubstring" />
      <Block type="text_changeCase" />
      <Block type="text_trim" />
      <Block type="text_prompt_ext" />
      <Block type="text_prompt" />
      <Block type="text_count" />
      <Block type="text_replace" />
      <Block type="text_reverse" />
    </Category>
  );
}

export default TextCategory;
