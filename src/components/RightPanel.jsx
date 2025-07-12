import React, { useRef, useState, useEffect } from "react";
import useBuilderStore from "@/store/useBuilderStore";
import { XMarkIcon } from "@heroicons/react/24/outline";

const availableFonts = ['Poppins', 'Roboto', 'Inter', 'Montserrat', 'Playfair Display'];
const fontWeights = ['100', '300', '400', '500', '600', '700', '800'];

const RightPanel = () => {
  const {
    selectedSectionId,
    sections,
    updateSectionProp,
    selectSection,
  } = useBuilderStore();

  const section = sections.find((s) => s.id === selectedSectionId);
  const panelRef = useRef(null);
  const [position, setPosition] = useState({ x: window.innerWidth - 400, y: 100 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop dragging functionality
  useEffect(() => {
    if (isMobile) return;

    const panel = panelRef.current;
    if (!panel) return;

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    const handleMouseDown = (e) => {
      const rect = panel.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      isDragging = true;
      document.body.style.userSelect = "none";

      const handleMouseMove = (e) => {
        if (!isDragging) return;
        setPosition({
          x: e.clientX - offsetX,
          y: e.clientY - offsetY,
        });
      };

      const handleMouseUp = () => {
        isDragging = false;
        document.body.style.userSelect = "";
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const dragHandle = panel.querySelector("[data-drag-handle]");
    if (dragHandle) dragHandle.addEventListener("mousedown", handleMouseDown);
    return () => dragHandle && dragHandle.removeEventListener("mousedown", handleMouseDown);
  }, [isMobile]);

  const handleChange = (key, value) => {
    updateSectionProp(section.id, key, value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => updateSectionProp(section.id, "bgImage", reader.result);
    reader.readAsDataURL(file);
  };

  if (!section) return null;
  const props = section.props || {};

  // Mobile Centered Modal with higher z-index
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[9997] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-lg max-h-[90vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl border border-blue-500/20">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-blue-500/20">
            <div>
              <h3 className="font-semibold text-white">Edit Section</h3>
              <p className="text-sm text-gray-400">{section.name}</p>
            </div>
            <button
              onClick={() => selectSection(null)}
              className="p-2 text-gray-400 transition-colors rounded-full hover:bg-blue-500/10 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Content - Scrollable */}
          <div className="p-4 max-h-[75vh] overflow-y-auto space-y-4 text-sm">
            {renderFormFields(props, handleChange, handleFileUpload)}
          </div>
        </div>
      </div>
    );
  }

  // Desktop Floating Panel (Right-side)
  return (
    <div
      ref={panelRef}
      className="fixed z-[9999] w-[360px] bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl border border-blue-500/20 rounded-xl overflow-hidden backdrop-blur-xl"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <div
        className="flex items-center justify-between p-4 border-b cursor-move border-blue-500/20 bg-gray-900/50"
        data-drag-handle
      >
        <h3 className="font-semibold text-white">Edit Section</h3>
        <button
          onClick={() => selectSection(null)}
          className="text-gray-400 transition-colors hover:text-red-400"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 max-h-[80vh] overflow-y-auto space-y-4 text-sm">
        {renderFormFields(props, handleChange, handleFileUpload)}
      </div>
    </div>
  );
};

// Form fields rendering function (unchanged)
const renderFormFields = (props, handleChange, handleFileUpload) => {
  return Object.entries(props).map(([key, value]) => {
    const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

    // Background Image
    if (key === "bgImage") {
      return (        <div key={key}>
          <label className="block mb-2 font-medium text-gray-300">{label}</label>
          {value && (
            <img
              src={value}
              alt="bg preview"
              className="object-cover w-full h-32 mb-3 border rounded border-blue-500/20"
            />
          )}
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileUpload}
            className="w-full px-3 py-2 text-gray-300 border rounded bg-gray-800/50 border-blue-500/20 backdrop-blur-sm"
          />
        </div>
      );
    }

    // Colors
    if (key.toLowerCase().includes("color") && typeof value === "string") {
      return (
        <div key={key}>
          <label className="block mb-2 font-medium text-gray-300">{label}</label>
          <input
            type="color"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full h-10 border rounded bg-gray-800/50 border-blue-500/20 backdrop-blur-sm"
          />
        </div>
      );
    }

    // Font
    if (key === "font") {
      return (
        <div key={key}>
          <label className="block mb-2 font-medium text-gray-300">{label}</label>
          <select
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full px-3 py-2 text-gray-300 border rounded bg-gray-800/50 border-blue-500/20 backdrop-blur-sm"
          >
            {availableFonts.map((font) => (
              <option key={font} value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
        </div>
      );
    }

    // Font Size
    if (key === "fontSize") {
      return (
        <div key={key}>
          <label className="block mb-2 font-medium text-gray-300">Font Size (px)</label>
          <input
            type="range"
            min="12"
            max="96"
            step="1"
            value={parseInt(value)}
            onChange={(e) => handleChange(key, `${e.target.value}px`)}
            className="w-full accent-blue-500"
          />
          <span className="text-xs text-gray-400">Current: {value}</span>
        </div>
      );
    }

    // Font Weight
    if (key === "fontWeight") {
      return (
        <div key={key}>
          <label className="block mb-2 font-medium text-gray-300">Font Weight</label>
          <select
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full px-3 py-2 text-gray-300 border rounded bg-gray-800/50 border-blue-500/20 backdrop-blur-sm"
          >
            {fontWeights.map((weight) => (
              <option key={weight} value={weight}>
                {weight}
              </option>
            ))}
          </select>
        </div>
      );
    }

    // Text Align
    if (key === "textAlign") {
      return (
        <div key={key}>
          <label className="block mb-2 font-medium text-gray-300">Text Align</label>
          <select
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full px-3 py-2 text-gray-300 border rounded bg-gray-800/50 border-blue-500/20 backdrop-blur-sm"
          >
            {["left", "center", "right"].map((align) => (
              <option key={align} value={align}>
                {align}
              </option>
            ))}
          </select>
        </div>
      );
    }

    // Arrays
    if (Array.isArray(value)) {
      return (
        <div key={key}>
          <label className="block mb-2 font-medium text-gray-300">{label}</label>
          <textarea
            className="w-full px-3 py-2 text-gray-300 placeholder-gray-500 border rounded bg-gray-800/50 border-blue-500/20 backdrop-blur-sm"
            value={value.join(", ")}
            onChange={(e) =>
              handleChange(
                key,
                e.target.value.split(",").map((s) => s.trim())
              )
            }
          />
        </div>
      );
    }

    // Numbers
    if (typeof value === "number") {
      return (
        <div key={key}>
          <label className="block mb-2 font-medium text-gray-300">{label}</label>
          <input
            type="number"
            className="w-full px-3 py-2 text-gray-300 border rounded bg-gray-800/50 border-blue-500/20 backdrop-blur-sm"
            value={value}
            onChange={(e) => handleChange(key, Number(e.target.value))}
          />
        </div>
      );
    }

    // Default string input
    return (
      <div key={key}>
        <label className="block mb-2 font-medium text-gray-300">{label}</label>
        <input
          type="text"
          className="w-full px-3 py-2 text-gray-300 placeholder-gray-500 border rounded bg-gray-800/50 border-blue-500/20 backdrop-blur-sm"
          value={value}
          onChange={(e) => handleChange(key, e.target.value)}
        />
      </div>
    );
  });
};

export default RightPanel;