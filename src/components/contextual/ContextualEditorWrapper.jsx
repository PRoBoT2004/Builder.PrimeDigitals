import React, { createContext, useContext, useState } from 'react'

const ContextualEditorContext = createContext()

export const ContextualEditorProvider = ({ children }) => {
  const [editor, setEditor] = useState({
    isOpen: false,
    sectionId: null,
    propKey: null,
    position: { x: 0, y: 0 },
  })

  const openEditor = (sectionId, propKey, position) => {
    setEditor({
      isOpen: true,
      sectionId,
      propKey,
      position,
    })
  }

  const closeEditor = () => {
    setEditor({
      isOpen: false,
      sectionId: null,
      propKey: null,
      position: { x: 0, y: 0 },
    })
  }

  return (
    <ContextualEditorContext.Provider value={{ editor, openEditor, closeEditor }}>
      {children}
    </ContextualEditorContext.Provider>
  )
}

export const useContextualEditor = () => useContext(ContextualEditorContext)
export default ContextualEditorProvider;