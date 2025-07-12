// src/pages/LandingPage.jsx

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // if you're using shadcn/ui

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 text-center">
      <h1 className="text-4xl font-bold">Build Your Homepage Effortlessly</h1>
      <p className="max-w-md text-gray-500">
        Choose how you want to get started — with ready-made templates or build it section by section.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => navigate("/templates")}>
          Use Pre-built Templates
        </Button>
        <Button variant="outline" onClick={() => navigate("/sections")}>
          Build with Sections
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
