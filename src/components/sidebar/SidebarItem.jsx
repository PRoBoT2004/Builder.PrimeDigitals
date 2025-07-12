import React from "react";
import { useDrag } from "react-dnd";

const SidebarItem = ({ variation }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "SECTION",
    item: {
      id: variation.id,
      name: variation.name,
      componentKey: variation.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={`group relative p-4 bg-gray-900/50 border border-blue-500/20 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400/40 cursor-move transition-all duration-200 backdrop-blur-sm ${
        isDragging ? "opacity-50 scale-95" : "hover:scale-[1.02] hover:bg-blue-500/5"
      }`}
    >
      <div className="absolute transition-opacity opacity-0 top-2 right-2 group-hover:opacity-100">
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-blue-400/60"></div>
          ))}
        </div>
      </div>

      <div className="mb-2">
        <span className="inline-block px-2 py-1 text-xs font-medium text-blue-300 border rounded-full bg-blue-500/10 border-blue-500/20">
          {variation.type}
        </span>
      </div>

      <h4 className="mb-1 font-semibold text-white">{variation.name}</h4>
      <p className="text-sm text-gray-400">Click and drag to canvas</p>

      {isDragging && (
        <div className="absolute inset-0 border-2 border-blue-400 border-dashed rounded-lg bg-blue-500/10" />
      )}
    </div>
  );
};

export default SidebarItem;