// src/components/ui/input.jsx
const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`px-3 py-2 border rounded w-full ${className}`}
      {...props}
    />
  );
};

export { Input };
