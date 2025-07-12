import { useParams } from "react-router-dom";
import ModernTemplate from "@/templates/real-estate/ModernTemplate";
import ClassicTemplate from "@/templates/real-estate/LuxuryTemplate";

const Builder = () => {
  const { templateId } = useParams();

  const templates = {
    modern: <LuxuryTemplate />,
    classic: <ClassicTemplate />  };

  return (
    <div className="p-6">
      {templates[templateId] || <div>Template not found</div>}
    </div>
  );
};

export default Builder;
