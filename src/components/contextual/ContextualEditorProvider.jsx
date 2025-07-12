// src/components/contextual/ContextualEditorProvider.jsx
import React, { createContext, useContext, useState } from "react";

const ContextualEditorContext = createContext();

export const ContextualEditorProvider = ({ children }) => {
  const [editorData, setEditorData] = useState(null); // { sectionId, propKey, position }

  const openEditor = (data) => setEditorData(data);
  const closeEditor = () => setEditorData(null);

  return (
    <ContextualEditorContext.Provider
      value={{
        editorData,
        openEditor,
        closeEditor,
      }}
    >
      {children}
    </ContextualEditorContext.Provider>
  );
};

export const useContextualEditor = () => useContext(ContextualEditorContext);
