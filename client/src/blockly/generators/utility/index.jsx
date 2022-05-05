import Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript.print = (block) => {
  const valueMessage = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  const code = `console.log(${valueMessage});\n`;
  return code;
};
