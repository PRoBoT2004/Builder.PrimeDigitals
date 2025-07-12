import React, { useState } from "react";
import useBuilderStore from "@/store/useBuilderStore";
import { Dialog } from "@headlessui/react";

const LayoutModal = ({ isOpen, onClose }) => {
  const {
    saveLayout,
    getSavedLayouts,
    loadLayoutById,
    deleteLayout,
  } = useBuilderStore();

  const [layoutName, setLayoutName] = useState("");
  const [layouts, setLayouts] = useState(getSavedLayouts());

  const handleSave = () => {
    if (!layoutName.trim()) return;
    saveLayout(layoutName.trim());
    setLayouts(getSavedLayouts());
    setLayoutName("");
  };

  const handleLoad = (id) => {
    loadLayoutById(id);
    onClose();
  };

  const handleDelete = (id) => {
    if (!confirm("Delete this layout?")) return;
    deleteLayout(id);
    setLayouts(getSavedLayouts());
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg p-6 bg-white shadow-lg rounded-xl">
          <Dialog.Title className="mb-4 text-xl font-bold">Manage Layouts</Dialog.Title>

          {/* Save layout */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="text"
              placeholder="Enter layout name"
              value={layoutName}
              onChange={(e) => setLayoutName(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded"
            />
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>

          {/* Saved layouts */}
          {layouts.length === 0 ? (
            <p className="text-sm text-gray-500">No saved layouts yet.</p>
          ) : (
            <ul className="space-y-3">
              {layouts.map((layout) => (
                <li
                  key={layout.id}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded"
                >
                  <span className="text-sm font-medium">{layout.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleLoad(layout.id)}
                      className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700"
                    >
                      Load
                    </button>
                    <button
                      onClick={() => handleDelete(layout.id)}
                      className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Close */}
          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default LayoutModal;
