import React, { useState } from 'react'
import SidebarItem from './SidebarItem'

const SidebarCategory = ({ title, variations, onSelect }) => {
  const [open, setOpen] = useState(true)

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium bg-gray-100 rounded hover:bg-gray-200"
      >
        <span>{title}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="pl-4 mt-2 space-y-1">
          {variations.map((variation) => (
            <SidebarItem
              key={variation.id}
              label={variation.label}
              onClick={() => onSelect(variation)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SidebarCategory
