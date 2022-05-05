import React from 'react';

import {
  mainStyle,
  toolbarStyle,
} from '../../styles';

export function MainLayout({ children }) {
  return (
    <div style={mainStyle}>
      <div style={toolbarStyle}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
