import React, { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CanvasSection from "./CanvasSection";
import Sidebar from "./Sidebar";

const Canvas = () => {
  const [sections, setSections] = useState([]);

  const addSection = useCallback((sectionData) => {
    const newSection = {
      id: `section-${Date.now()}-${Math.random()}`,
      ...sectionData,
    };
    setSections(prev => [...prev, newSection]);
  }, []);

  const removeSection = useCallback((sectionId) => {
    setSections(prev => prev.filter(section => section.id !== sectionId));
  }, []);

  const moveSection = useCallback((fromIndex, toIndex) => {
    setSections(prev => {
      const newSections = [...prev];
      const [movedSection] = newSections.splice(fromIndex, 1);
      newSections.splice(toIndex, 0, movedSection);
      return newSections;
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar onAddSection={addSection} />
        
        {/* Main Canvas Area */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Website Builder Canvas</h1>
            <p className="text-gray-600">Drag sections from the sidebar to build your page</p>
          </div>
          
          {/* Canvas Container - This is the key fix */}
          <div className="canvas-viewport">
            <div className="canvas-container">
              {sections.length === 0 ? (
                <div className="flex items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="text-center">
                    <p className="text-gray-500">Drop sections here to start building</p>
                  </div>
                </div>
              ) : (
                <div className="canvas-sections">
                  {sections.map((section, index) => (
                    <CanvasSection
                      key={section.id}
                      section={section}
                      index={index}
                      onRemove={removeSection}
                      onMove={moveSection}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Critical Canvas Styles - This is what fixes the overflow */}
      <style jsx global>{`
        .canvas-viewport {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          overflow: hidden; /* This prevents any overflow */
        }
        
        .canvas-container {
          width: 100%;
          height: 100%;
          overflow-x: hidden; /* Force horizontal containment */
          overflow-y: auto; /* Allow vertical scrolling */
        }
        
        .canvas-sections {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
        }
        
        /* Force all sections to respect canvas width */
        .canvas-sections > * {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        
        /* Override any fixed positioning within canvas */
        .canvas-container .fixed {
          position: absolute !important;
        }
        
        /* Override viewport units within canvas */
        .canvas-container [style*="100vh"] {
          height: 600px !important;
        }
        
        .canvas-container [style*="100vw"] {
          width: 100% !important;
        }
        
        /* Force horizontal scroll containers to respect canvas width */
        .canvas-container .overflow-x-scroll,
        .canvas-container .overflow-x-auto {
          max-width: 100% !important;
          overflow-x: auto !important;
        }
        
        /* Ensure flex containers don't overflow */
        .canvas-container .flex {
          max-width: 100% !important;
        }
        
        /* Override any absolute positioning that might cause overflow */
        .canvas-container .absolute {
          position: relative !important;
        }
        
        /* Specific fix for your FeaturedLuxury3 component */
        .canvas-container section {
          position: relative !important;
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          min-height: 600px !important;
          overflow: hidden !important;
        }
        
        /* Fix for the horizontal scroll container in FeaturedLuxury3 */
        .canvas-container .snap-x {
          height: 500px !important;
        }
        
        /* Hide any fixed elements that would break canvas layout */
        .canvas-container .fixed {
          display: none !important;
        }
      `}</style>
    </DndProvider>
  );
};

export default Canvas;