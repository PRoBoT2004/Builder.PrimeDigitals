import React from "react";
import { useDrag } from "react-dnd";
import FeaturedLuxury1 from "../sections/real-estate/FeaturedLuxury1";
import FeaturedLuxury3 from "../sections/real-estate/FeaturedLuxury3";

const DraggableSection = ({ section }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "SIDEBAR_SECTION",
    item: section,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 border border-gray-200 rounded-lg cursor-move hover:border-blue-300 hover:shadow-md transition-all ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center mb-2 space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded"></div>
        <h3 className="font-medium text-gray-800">{section.name}</h3>
      </div>
      <p className="text-sm text-gray-600">{section.description}</p>
    </div>
  );
};

const DropZone = ({ onAddSection }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "SIDEBAR_SECTION",
    drop: (item) => {
      onAddSection(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`fixed top-0 right-0 w-64 h-full bg-white border-l border-gray-200 transition-all ${
        isOver ? "bg-blue-50 border-blue-300" : ""
      }`}
    >
      {/* This is invisible but handles the drop */}
    </div>
  );
};

const Sidebar = ({ onAddSection }) => {
  const sections = [
    {
      id: "featured-luxury-1",
      name: "Luxury Properties Grid",
      description: "Grid layout with property cards",
      component: FeaturedLuxury1,
      type: "properties",
    },
    {
      id: "featured-luxury-3",
      name: "Horizontal Scroll Properties",
      description: "Horizontal scrolling luxury properties",
      component: FeaturedLuxury3,
      type: "properties",
    },
  ];

  return (
    <>
      <div className="w-64 p-4 overflow-y-auto bg-white border-r border-gray-200">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">Components</h2>
        <div className="space-y-4">
          {sections.map((section) => (
            <DraggableSection key={section.id} section={section} />
          ))}
        </div>
      </div>
      <DropZone onAddSection={onAddSection} />
    </>
  );
};

export default Sidebar;