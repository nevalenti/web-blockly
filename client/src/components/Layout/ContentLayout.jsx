import React from 'react';

import { contentStyle } from '../../styles';

export function ContentLayout({ children }) {
  return (
    <div style={contentStyle}>
      {children}
    </div>
  );
}

export default ContentLayout;
