// src/components/DraggableWrapper.jsx
import React from 'react'
import { Rnd } from 'react-rnd'

const DraggableWrapper = ({ children }) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: '100%',
        height: 'auto',
      }}
      bounds=".canvas-container"
      enableResizing={{
        bottomRight: true,
        right: true,
        bottom: true,
      }}
      dragHandleClassName=".drag-handle"
      style={{
        zIndex: 10,
        marginBottom: '1.5rem',
      }}
    >
      <div className="relative w-full">{children}</div>
    </Rnd>
  )
}

export default DraggableWrapper
