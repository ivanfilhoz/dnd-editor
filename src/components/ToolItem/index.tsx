import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './styles.module.css';

export default function ToolItem({ component }: any) {
  const [, dragRef] = useDrag(
    () => ({
      type: 'toolitem',
      item: { component }
    })
  )

  const Preview = React.lazy(
    () => import(`../../ui-components/${component}`)
      .then(module => ({ default: module.preview }))
  )

  return <div className={styles.toolitem} ref={dragRef}>
    <React.Suspense fallback=''>
      <Preview />
    </React.Suspense>
  </div>;
}
