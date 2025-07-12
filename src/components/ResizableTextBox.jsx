import React, { useRef, useEffect, useState } from 'react';
import useBuilderStore from '@/store/useBuilderStore';

const ResizableTextBox = ({ id, text, font, color, initialFontSize = 56 }) => {
  const updateProp = useBuilderStore((s) => s.updateSectionProp);

  const boxRef = useRef(null);
  const [fontSize, setFontSize] = useState(initialFontSize);
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [boxHeight, setBoxHeight] = useState(initialFontSize + 40); // initial container height

  // Update global store when fontSize changes
  useEffect(() => {
    updateProp(id, 'fontSize', `${fontSize}px`);
  }, [fontSize]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setStartY(e.clientY);
    setStartHeight(boxRef.current.offsetHeight);
    setIsResizing(true);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const dy = e.clientY - startY;
    const newHeight = Math.max(40, startHeight + dy);
    const newFontSize = Math.max(12, Math.floor((newHeight / startHeight) * fontSize));

    setFontSize(newFontSize);
    setBoxHeight(newHeight);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, startY, startHeight]);

  return (
    <div
      ref={boxRef}
      className="relative px-4 border-2 border-blue-500 rounded-md"
      style={{
        fontFamily: font,
        fontSize: `${fontSize}px`,
        height: boxHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        userSelect: 'none',
      }}
    >
      <div style={{ textAlign: 'center', width: '100%' }}>
        {text.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* Resize Handle */}
      <div
        onMouseDown={handleMouseDown}
        className="absolute w-4 h-4 bg-blue-500 bottom-[2px] right-[2px] cursor-nwse-resize z-10"
        style={{
          borderRadius: '2px',
        }}
      />
    </div>
  );
};

export default ResizableTextBox;