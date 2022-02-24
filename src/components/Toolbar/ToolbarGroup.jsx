import React, { useState } from 'react'
import { COMPONENTS_GROUPS } from '../../util/constants'
import ToolItem from '../ToolItem'

export default function ToolbarGroup({ groupName }) {
  const groupItems = COMPONENTS_GROUPS[groupName]
  const [expanded, setExpanded] = useState(true)

  return (
    <>
      <span onClick={() => setExpanded(!expanded)}>{groupName}</span>
      {expanded && groupItems.map(component => (
        <ToolItem key={component} component={component} />
      ))}
    </>
  )
}
