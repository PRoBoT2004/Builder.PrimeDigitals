import React, { useRef } from 'react'
import { useContextualEditor } from "@/components/contextual/ContextualEditorProvider"

import useBuilderStore from '@/store/useBuilderStore'

const EditableElement = ({ sectionId, propKey, children, className = '' }) => {
  const ref = useRef(null)
  const { openEditor } = useContextualEditor()

  const handleClick = (e) => {
    e.stopPropagation()
    const rect = ref.current.getBoundingClientRect()
    const position = {
      x: rect.left + rect.width / 2,
      y: rect.top,
    }
    openEditor(sectionId, propKey, position)
  }

  return (
    <div
      ref={ref}
      className={`${className} cursor-pointer hover:outline hover:outline-blue-400 hover:outline-2`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default EditableElement
