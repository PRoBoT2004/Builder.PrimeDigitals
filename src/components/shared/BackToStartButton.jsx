// src/components/shared/BackToStartButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BackToStartButton = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8">
      <button
        onClick={() => navigate("/builder/start")}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to Start
      </button>
    </div>
  );
};

export default BackToStartButton;
