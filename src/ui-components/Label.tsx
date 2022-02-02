import React from 'react';

export default function Label({ config }: any) {
  return <div style={{ textAlign: config.textAlign }}>{config.value || 'Label'}</div>;
}

export const preview = () => <span>Label</span>

export const config = {
  value: 'string',
  textAlign: ['left', 'center', 'right']
}
