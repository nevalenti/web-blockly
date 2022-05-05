/* eslint-disable react/no-unused-class-component-methods */
import React, { createRef } from 'react';
import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';

Blockly.setLocale(locale);
export class BlocklyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.blocklyDiv = createRef();
    this.toolbox = createRef();
  }

  componentDidMount() {
    const {
      initialXml, children, media, ...rest
    } = this.props;
    this.primaryWorkspace = Blockly.inject(
      this.blocklyDiv.current,
      {
        toolbox: this.toolbox.current,
        grid: {
          spacing: 25,
          length: 5,
          snap: true,
        },
        ...rest,
      },
    );

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
    }
  }

  get workspace() {
    return this.primaryWorkspace;
  }

  setXml(xml) {
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
  }

  render() {
    const { children } = this.props;

    return (
      <>
        <div
          ref={this.blocklyDiv}
          id="blocklyDiv"
          style={{
            width: '100vw',
            height: 'calc(100vh - 50px)',
            position: 'absolute',
            bottom: 0,
          }}
        />
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          is="blockly"
          style={{ display: 'none' }}
          ref={this.toolbox}
        >
          {children}
        </xml>
      </>
    );
  }
}

export default BlocklyComponent;
