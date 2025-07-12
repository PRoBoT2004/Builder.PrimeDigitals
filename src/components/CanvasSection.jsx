import React, { useState, useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import useBuilderStore from "@/store/useBuilderStore";
import { 
  ChevronUpIcon, 
  ChevronDownIcon, 
  PencilIcon, 
  XMarkIcon,
  EllipsisVerticalIcon 
} from "@heroicons/react/24/outline";

const CanvasSection = ({ section, index, onRemove, onMove, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileControls, setShowMobileControls] = useState(false);
  const { selectSection, selectedSectionId } = useBuilderStore();

  const ref = useRef(null);

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CANVAS_SECTION",
    item: { id: section.id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [index]);

  const [, dropRef] = useDrop(() => ({
    accept: "CANVAS_SECTION",
    hover: (draggedItem, monitor) => {
      if (!ref.current) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (draggedItem.index === index) return;
      if (draggedItem.index < index && hoverClientY < hoverMiddleY) return;
      if (draggedItem.index > index && hoverClientY > hoverMiddleY) return;

      onMove(draggedItem.index, index);
      draggedItem.index = index;
    },
  }), [index]);

  const combinedRef = useCallback((node) => {
    ref.current = node;
    if (!isMobile) {
      dragRef(dropRef(node));
    }
  }, [dragRef, dropRef, isMobile]);

  const Component = section.component;
  if (!Component) return null;

  const isSelected = selectedSectionId === section.id;

  const handleRemoveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove(section.id);
    setShowMobileControls(false);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    selectSection(section.id);
    setShowMobileControls(false);
  };

  const handleMoveUp = (e) => {
    e.stopPropagation();
    if (index > 0) onMove(index, index - 1);
    setShowMobileControls(false);
  };

  const handleMoveDown = (e) => {
    e.stopPropagation();
    onMove(index, index + 1);
    setShowMobileControls(false);
  };

  const handleMobileClick = (e) => {
    if (isMobile) {
      e.stopPropagation();
      setShowMobileControls(!showMobileControls);
    }
  };

  return (
    <div
      ref={combinedRef}
      className={`relative group ${isDragging ? "opacity-50 scale-95" : ""} ${
        isSelected ? "ring-2 ring-blue-400" : ""
      }`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{ 
        isolation: 'isolate',
        zIndex: showMobileControls ? 9995 : 'auto' // Lower than navbar
      }}
    >
      {/* Desktop Controls - Hover */}
      {!isMobile && (
        <div
          className={`absolute -top-4 left-0 right-0 h-10 bg-gradient-to-r from-gray-800 to-gray-900 border border-blue-500/20 rounded-t-lg flex items-center justify-between px-4 z-[9995] transition-all duration-200 backdrop-blur-sm ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-300">{section.name}</span>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleMoveUp}
              disabled={index === 0}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-blue-500/20 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Move Up"
            >
              <ChevronUpIcon className="w-4 h-4" />
            </button>

            <button
              onClick={handleMoveDown}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-blue-500/20 rounded transition-colors"
              title="Move Down"
            >
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            <button
              onClick={handleEditClick}
              className="p-1.5 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 rounded transition-colors"
              title="Edit"
            >
              <PencilIcon className="w-4 h-4" />
            </button>

            <button
              onClick={handleRemoveClick}
              className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded transition-colors"
              title="Remove"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Controls - Tap to Show */}
      {isMobile && (
        <>
          {/* Mobile Control Bar */}
          <div
            className={`absolute -top-14 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-900 border border-blue-500/20 rounded-lg p-3 z-[9995] transition-all duration-200 backdrop-blur-sm ${
              showMobileControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-300">{section.name}</span>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleMoveUp}
                  disabled={index === 0}
                  className="p-2 text-gray-400 transition-colors rounded hover:text-white hover:bg-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Move Up"
                >
                  <ChevronUpIcon className="w-5 h-5" />
                </button>

                <button
                  onClick={handleMoveDown}
                  className="p-2 text-gray-400 transition-colors rounded hover:text-white hover:bg-blue-500/20"
                  title="Move Down"
                >
                  <ChevronDownIcon className="w-5 h-5" />
                </button>

                <button
                  onClick={handleEditClick}
                  className="p-2 text-blue-400 transition-colors rounded hover:text-blue-300 hover:bg-blue-500/20"
                  title="Edit"
                >
                  <PencilIcon className="w-5 h-5" />
                </button>

                <button
                  onClick={handleRemoveClick}
                  className="p-2 text-red-400 transition-colors rounded hover:text-red-300 hover:bg-red-500/20"
                  title="Remove"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Tap Indicator */}
          <div 
            className="absolute z-[9995] cursor-pointer top-3 right-3"
            onClick={handleMobileClick}
          >
            <div className={`p-2 rounded-full transition-colors ${
              showMobileControls ? "bg-blue-500" : "bg-gray-700/80"
            }`}>
              <EllipsisVerticalIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </>
      )}

      {/* Section Content Container - CRITICAL FIX */}
      <div className={`relative border rounded-lg transition-colors ${
        isSelected 
          ? "border-blue-400 shadow-lg shadow-blue-500/20" 
          : "border-blue-500/20"
      }`}>
        {/* Component wrapper with proper stacking context */}
        <div 
          className="relative"
          style={{ 
            overflow: 'visible',
            zIndex: 1,
            position: 'relative'
          }}
        >
          <Component {...section.props} />
        </div>
      </div>
    </div>
  );
};

export default CanvasSection;