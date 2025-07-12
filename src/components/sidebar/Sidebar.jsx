// src/components/builder/Sidebar.jsx
import React from "react";
import useBuilderStore from "@/store/useBuilderStore";
import availableSections from "@/lib/availableSections";
import SidebarCategory from "./SidebarCategory";

const Sidebar = ({ onAddSection }) => {
  const { selectedNiche } = useBuilderStore();

  const sections = availableSections[selectedNiche] || [];

  return (
    <aside className="h-full p-4 overflow-y-auto bg-white border-r border-gray-200 w-72">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Sections</h2>
      {sections.map((sectionGroup) => (
        <SidebarCategory
          key={sectionGroup.type}
          title={sectionGroup.type.charAt(0).toUpperCase() + sectionGroup.type.slice(1)}
          variations={sectionGroup.variations}
          onSelect={onAddSection}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
