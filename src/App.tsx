import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css'
import Canvas from './components/Canvas'
import PropertiesPanel from './components/PropertiesPanel'
import Toolbar from './components/Toolbar'

export const AppContext = createContext<{
  canvas?: any[],
  setCanvas?: Dispatch<SetStateAction<any[]>>,
  selection?: number | null,
  setSelection?: Dispatch<SetStateAction<number | null>>
}>({})

function App () {
  const [canvas, setCanvas] = useState<any[]>([])
  const [selection, setSelection] = useState<number | null>(null)

  return (
    <DndProvider backend={HTML5Backend}>
      <AppContext.Provider value={{ canvas, setCanvas, selection, setSelection }}>
        <div className='layout'>
          <Toolbar />
          <Canvas />
          <PropertiesPanel />
        </div>
      </AppContext.Provider>
    </DndProvider>
  )
}

export default App
