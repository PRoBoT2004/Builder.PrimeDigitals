import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { BuilderFlowProvider } from './context/BuilderFlowContext.jsx'

// React DnD imports
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Import builder pages
import Start from './pages/builder/Start'
import Niches from './pages/builder/Niches'
import Mode from './pages/builder/Mode'
import Templates from './pages/builder/Templates'
import Editor from './pages/builder/Editor'
import Preview from './pages/builder/Preview'
import Export from './pages/builder/Export'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BuilderFlowProvider>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="/builder/start" replace />} />
            <Route path="/builder/start" element={<Start />} />
            <Route path="/builder/niches" element={<Niches />} />
            <Route path="/builder/mode" element={<Mode />} />
            <Route path="/builder/templates" element={<Templates />} />
            <Route path="/builder/editor" element={<Editor />} />
            <Route path="/builder/preview" element={<Preview />} />
            <Route path="/builder/export" element={<Export />} />
            <Route path="*" element={<Navigate to="/builder/start" replace />} />
          </Routes>
        </div>
      </BuilderFlowProvider>
    </DndProvider>
  )
}

export default App
