import React from 'react';

export default function TextArea({ config }: any) {
  return <textarea rows={config.rows} cols={config.cols} />;
}

export const preview = () => <span style={{ border: '#333 1px solid', padding: 2, background: '#fff' }}>TextArea</span>

export const config = {
  rows: 'number',
  cols: 'number'
}
