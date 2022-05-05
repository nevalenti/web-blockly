import React, {
  createRef,
  useEffect,
} from 'react';
import Blockly from 'blockly';
import BlocklyJS from 'blockly/javascript';
import cookies from 'js-cookie';
import { BlocklyComponent } from '../components/BlocklyComponent';
import { Separator } from '../../../blockly/components';
import * as Categories from '../../../blockly/categories';

import '../../../blockly/blocks/utility';
import '../../../blockly/generators/utility';
import '../../../blockly/themes';
import { MainLayout } from '../../../components/Layout';
import { BlocklyToolbar } from '../components/BlocklyToolbar';

export function BlocklyApp() {
  const simpleWorkspace = createRef();
  const code = createRef();
  const initialXml = cookies.get('initialXml') || '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';

  const getWorkspace = () => simpleWorkspace.current.workspace;

  const generateCode = () => BlocklyJS.workspaceToCode(getWorkspace());

  const workspaceToDom = () => Blockly.Xml.workspaceToDom(getWorkspace());

  const workspaceToXmlString = () => new XMLSerializer().serializeToString(workspaceToDom());

  useEffect(() => {
    getWorkspace().registerButtonCallback('createVariable', () => {
      Blockly.Variables.createVariableButtonHandler(getWorkspace(), null);
    });
  }, []);

  return (
    <MainLayout>
      <BlocklyToolbar
        generateCode={generateCode}
        workspaceToXmlString={workspaceToXmlString}
        codeRef={code}
      />
      <BlocklyComponent
        ref={simpleWorkspace}
        readOnly={false}
        initialXml={initialXml}
        renderer="zelos"
        theme="light"
        move={{
          scrollbars: false,
          drag: true,
          wheel: true,
        }}
        // zoom={{
        //   controls: true,
        //   wheel: true,
        //   startScale: 1.0,
        //   maxScale: 3,
        //   minScale: 0.3,
        //   scaleSpeed: 1.2,
        //   pinch: true,
        // }}
        media="media/"
        trashcan
      >
        <Categories.LogicCategory />
        <Categories.LoopCategory />
        <Categories.MathCategory />
        <Categories.TextCategory />
        <Categories.ListCategory />
        <Categories.VariableCategory />
        <Categories.FunctionCategory />
        <Separator />
        <Categories.UtilityCategory />
      </BlocklyComponent>
    </MainLayout>
  );
}

export default BlocklyApp;
