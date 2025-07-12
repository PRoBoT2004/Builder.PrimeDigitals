// src/components/ui/badge.jsx
const Badge = ({ children, className = "" }) => (
  <span className={`inline-block px-3 py-1 text-xs font-semibold bg-gray-200 rounded ${className}`}>
    {children}
  </span>
);

export { Badge };
