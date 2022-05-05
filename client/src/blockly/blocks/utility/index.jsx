import Blockly from 'blockly/core';

const printBlock = {
  type: 'print',
  message0: 'print %1',
  args0: [
    {
      type: 'input_value',
      name: 'message',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};

Blockly.Blocks.print = {
  init() {
    this.jsonInit(printBlock);
    this.setStyle('utility_blocks');
  },
};
