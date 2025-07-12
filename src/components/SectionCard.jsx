import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

const SectionCard = ({ section }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: section.id,
    data: {
      section,
      fromSidebar: true,
    },
  })

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-4 bg-white border border-gray-200 rounded-lg shadow cursor-grab active:cursor-grabbing hover:bg-gray-100"
    >
      <h4 className="text-sm font-semibold">{section.name}</h4>
    </div>
  )
}

export default SectionCard
