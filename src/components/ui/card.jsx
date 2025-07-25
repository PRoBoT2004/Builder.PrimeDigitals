// src/components/ui/card.jsx
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow p-4 ${className}`}>{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;

export { Card, CardContent };
