// src/components/LayoutsPanel.jsx
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import useBuilderStore from "@/store/useBuilderStore";

const LayoutsPanel = () => {
  const {
    saveLayout,
    getSavedLayouts,
    loadLayoutById,
    deleteLayout,
    clearSections,
  } = useBuilderStore();

  const [isOpen, setIsOpen] = useState(false);
  const [layoutName, setLayoutName] = useState("");

  const layouts = getSavedLayouts();

  const handleSave = () => {
    if (!layoutName.trim()) return;
    saveLayout(layoutName.trim());
    setLayoutName("");
  };

  const handleLoad = (id) => {
    clearSections(); // Clear current canvas
    setTimeout(() => loadLayoutById(id), 0); // Then load
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this layout?")) {
      deleteLayout(id);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
      >
        💾 Layouts
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md p-6 bg-white shadow-xl rounded-xl">
            <Dialog.Title className="mb-4 text-lg font-bold">Manage Layouts</Dialog.Title>

            {/* Save Layout */}
            <div className="mb-6">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name this layout
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={layoutName}
                  onChange={(e) => setLayoutName(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Modern Landing"
                />
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Saved Layouts */}
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {layouts.length === 0 ? (
                <p className="text-sm text-gray-500">No layouts saved yet.</p>
              ) : (
                layouts.map((layout) => (
                  <div
                    key={layout.id}
                    className="flex items-center justify-between px-3 py-2 border rounded-lg"
                  >
                    <div className="text-sm font-medium text-gray-800">{layout.name}</div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLoad(layout.id)}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => handleDelete(layout.id)}
                        className="text-xs text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Close */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default LayoutsPanel;
