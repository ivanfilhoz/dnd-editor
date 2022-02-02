import React from 'react';

export default function Button({ config: { action, actionTarget, label = 'Button' } }: any) {
  return <button>{label}</button>;
}

export const preview = () => <button>Button</button>

export const config = {
  label: 'string',
  action: 'string',
  actionTarget: ['_self', '_blank']
}