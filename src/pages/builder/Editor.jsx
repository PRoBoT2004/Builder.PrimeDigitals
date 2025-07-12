import React, { useEffect, useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";

import LayoutsPanel from "@/components/editor/LayoutsPanel";
import getAvailableSectionsByNiche from "@/lib/getAvailableSectionsByNiche";
import SidebarItem from "@/components/sidebar/SidebarItem";
import CanvasSection from "@/components/CanvasSection";
import RightPanel from "@/components/RightPanel";
import useBuilderStore from "@/store/useBuilderStore";
import { 
  PlusIcon, 
  EyeIcon, 
  XMarkIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/outline";

const Editor = () => {
  const {
    sections,
    addSection,
    removeSection,
    reorderSections: moveSection,
    clearSections,
    selectedSectionId,
    loadFromLocalStorage,
    niche,
  } = useBuilderStore();

  const currentNiche = niche || "real-estate";
  const availableSections = getAvailableSectionsByNiche(currentNiche);

  const [dragOverCanvas, setDragOverCanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSectionsModal, setShowSectionsModal] = useState(false);
  const navigate = useNavigate();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const [, dropRef] = useDrop(() => ({
    accept: "SECTION",
    drop: (item) => {
      const match = availableSections
        .flatMap((cat) => cat.variations)
        .find((v) => v.id === item.componentKey || v.id === item.id);

      if (match) {
        addSection({
          name: match.name,
          component: match.component,
          initialProps: match.component.defaultProps || {},
          componentKey: match.id,
        });
      }
    },
    hover: () => setDragOverCanvas(true),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleAddSectionFromModal = useCallback((variation) => {
    addSection({
      name: variation.name,
      component: variation.component,
      initialProps: variation.component.defaultProps || {},
      componentKey: variation.id,
    });
    setShowSectionsModal(false);
  }, [addSection]);

  const handleRemove = useCallback((id) => removeSection(id), [removeSection]);
  const handleMove = useCallback((fromIndex, toIndex) => moveSection(fromIndex, toIndex), [moveSection]);
  
  const handleClear = () => {
    if (window.confirm("Clear all sections?")) {
      clearSections();
    }
  };

  // Sections Modal Component
  const SectionsModal = () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[90vh] mx-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl border border-blue-500/20">
        <div className="flex items-center justify-between p-6 border-b border-blue-500/20">
          <div>
            <h2 className="text-2xl font-bold text-white">Add Sections</h2>
            <p className="text-gray-400">Choose a section to add to your canvas</p>
          </div>
          <button
            onClick={() => setShowSectionsModal(false)}
            className="p-2 text-gray-400 transition-colors rounded-full hover:bg-blue-500/10 hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[75vh] p-6">
          <div className="space-y-8">
            {availableSections.map((category) => (
              <div key={category.type}>
                <h4 className="sticky top-0 z-10 py-3 mb-4 text-sm font-bold tracking-wide text-blue-400 uppercase bg-gradient-to-br from-gray-900 via-black to-gray-900">
                  {category.type}
                </h4>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.variations.map((variation) => (
                    <div
                      key={variation.id}
                      onClick={() => handleAddSectionFromModal(variation)}
                      className="p-6 transition-all border cursor-pointer group border-blue-500/20 rounded-xl bg-gray-900/50 backdrop-blur-sm active:scale-95 hover:border-blue-400/40 hover:bg-blue-500/5"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-300 border rounded-full bg-blue-500/10 border-blue-500/20">
                          {variation.type || category.type}
                        </span>
                        <PlusIcon className="w-5 h-5 text-blue-400 transition-transform group-hover:scale-110" />
                      </div>
                      <h5 className="mb-2 font-semibold text-white">{variation.name}</h5>
                      <p className="text-sm text-gray-400">Click to add to canvas</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Desktop Sidebar - Hidden on Mobile */}
      {!isMobile && (
        <div className="fixed top-0 left-0 z-40 flex flex-col h-screen border-r bg-gradient-to-b from-gray-900 to-black border-blue-500/20 w-80">
          <div className="flex-shrink-0 p-6 border-b border-blue-500/20">
            <h2 className="text-xl font-bold text-white">Section Library</h2>
            <p className="text-gray-400">Drag to build your page</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {availableSections.map((category) => (
                <div key={category.type}>
                  <h4 className="sticky top-0 py-2 mb-3 text-xs font-bold text-blue-400 uppercase bg-gradient-to-b from-gray-900 to-black">
                    {category.type}
                  </h4>
                  <div className="space-y-3">
                    {category.variations.map((variation) => (
                      <SidebarItem key={variation.id} variation={variation} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 p-6 text-xs text-gray-500 border-t border-blue-500/20">
            <p>💡 Drag to reorder</p>
            <p>🗑️ Click X to remove</p>
          </div>
        </div>
      )}

      {/* Mobile-Optimized Compact Top Toolbar */}
      {isMobile ? (
        <div className="fixed top-0 left-0 right-0 z-30 border-b bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-xl border-blue-500/20">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Left side - Back button only */}
            <button
              onClick={() => navigate("/builder/niches")}
              className="flex items-center justify-center w-10 h-10 text-blue-400 transition-colors rounded-full hover:bg-blue-500/10"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>

            {/* Center - Section count */}
            <div className="text-center">
              <p className="text-sm font-medium text-white">
                {sections.length === 0 ? "Empty Canvas" : `${sections.length} Section${sections.length !== 1 ? "s" : ""}`}
              </p>
            </div>

            {/* Right side - Action buttons */}
            <div className="flex items-center space-x-2">
              <LayoutsPanel />
              
              {sections.length > 0 && (
                <>
                  <button
                    onClick={handleClear}
                    className="px-2 py-1 text-xs text-red-400 transition-colors rounded hover:text-red-300 hover:bg-red-500/10"
                  >
                    Clear
                  </button>

                  <button
                    onClick={() => navigate("/builder/preview")}
                    className="p-2 text-white transition-colors rounded bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  >
                    <EyeIcon className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Desktop Top Toolbar (unchanged)
        <div className="fixed top-0 right-0 z-30 flex items-center justify-between px-4 py-3 border-b left-80 border-blue-500/20 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-xl">
          <div>
            <button
              onClick={() => navigate("/builder/niches")}
              className="inline-block px-4 py-2 mb-1 text-sm text-blue-400 transition-colors border rounded border-blue-500/30 hover:bg-blue-500/10"
            >
              ← Back to Niche
            </button>
            <h1 className="text-xl font-bold text-white">Page Builder</h1>
            <p className="text-sm text-gray-400">
              {sections.length === 0
                ? "Start building by adding sections"
                : `${sections.length} section${sections.length !== 1 ? "s" : ""} added`}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <LayoutsPanel />

            <button
              onClick={handleClear}
              disabled={sections.length === 0}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                sections.length === 0
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "text-red-400 hover:text-red-300 hover:bg-red-500/10"
              }`}
            >
              Clear All
            </button>

            <button
              onClick={() => navigate("/builder/preview")}
              disabled={sections.length === 0}
              className={`px-3 py-2 text-sm font-medium text-white rounded transition-colors ${
                sections.length === 0
                  ? "bg-gray-800 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              }`}
            >
              Preview
            </button>
          </div>
        </div>
      )}

      {/* Canvas with proper spacing and overflow handling */}
      <div className={`flex-1 ${!isMobile ? 'ml-80 mt-[104px]' : 'mt-[60px]'} pb-20 relative`}>
        <div
          ref={dropRef}
          className={`min-h-[600px] p-6 transition-all duration-200 ${
            sections.length === 0
              ? `border-2 border-dashed rounded-xl ${
                  dragOverCanvas
                    ? "border-blue-400 bg-blue-500/5"
                    : "border-blue-500/30 bg-gray-900/30"
                }`
              : "space-y-6"
          }`}
          onDragLeave={() => setDragOverCanvas(false)}
        >
          {sections.length === 0 ? (
            <div className="text-center text-white">
              <div className="mb-4 text-6xl">🏗️</div>
              <h3 className="text-xl font-semibold">Canvas is empty</h3>
              <p className="mb-6 text-gray-400">
                {isMobile 
                  ? "Tap the + button to add sections"
                  : "Drag sections from the left menu to begin"
                }
              </p>
              {isMobile && (
                <button
                  onClick={() => setShowSectionsModal(true)}
                  className="px-6 py-3 font-medium text-white transition-all rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                >
                  Browse Sections
                </button>
              )}
            </div>
          ) : (
            sections.map((section, index) => (
              <div key={section.id} className="relative">
                <CanvasSection
                  section={section}
                  index={index}
                  onRemove={handleRemove}
                  onMove={handleMove}
                  isMobile={isMobile}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Panel - Only show when section is selected */}
      {selectedSectionId && <RightPanel />}

      {/* Mobile Floating Action Button */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-[9998]">
          <button
            onClick={() => setShowSectionsModal(true)}
            className="flex items-center justify-center text-white transition-all rounded-full shadow-2xl bg-gradient-to-r from-blue-500 to-blue-600 w-14 h-14 hover:from-blue-600 hover:to-blue-700 hover:scale-110"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Sections Modal */}
      {showSectionsModal && <SectionsModal />}
    </div>
  );
};

export default Editor;