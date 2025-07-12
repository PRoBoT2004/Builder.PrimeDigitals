import React, { useEffect, useState } from 'react'
import useBuilderStore from '@/store/useBuilderStore'

const FloatingEditor = () => {
  const { selectedSectionId, selectedProp, sections, updateSectionProp, clearSelectedProp } = useBuilderStore()
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (!selectedProp) return
    const target = document.querySelector(`[data-prop-id="${selectedProp}"]`)
    if (target) {
      const rect = target.getBoundingClientRect()
      setPosition({ top: rect.top + window.scrollY - 10, left: rect.left + window.scrollX + rect.width + 10 })
    }
  }, [selectedProp])

  if (!selectedSectionId || !selectedProp) return null

  const section = sections.find(s => s.id === selectedSectionId)
  const propKey = selectedProp.split('-')[0]
  const propValue = section?.props[propKey]

  return (
    <div
      className="absolute z-50 p-4 bg-white border shadow-xl rounded-xl w-72"
      style={{ top: position.top, left: position.left }}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold">Edit: {propKey}</h4>
        <button onClick={clearSelectedProp}>✖</button>
      </div>

      <label className="block mb-1 text-sm font-medium text-gray-700">Text</label>
      <input
        type="text"
        value={propValue}
        onChange={(e) => updateSectionProp(selectedSectionId, propKey, e.target.value)}
        className="w-full px-3 py-2 text-sm border rounded"
      />

      {/* You can add color, font, size controls here too */}
    </div>
  )
}

export default FloatingEditor
