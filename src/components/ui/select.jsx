// src/components/ui/select.jsx
import React from "react";

const Select = ({ children }) => <div>{children}</div>;
const SelectTrigger = ({ children, className = "" }) => (
  <div className={`border rounded px-3 py-2 ${className}`}>{children}</div>
);
const SelectContent = ({ children }) => <div className="mt-2">{children}</div>;
const SelectItem = ({ children, value }) => <div data-value={value}>{children}</div>;
const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };
