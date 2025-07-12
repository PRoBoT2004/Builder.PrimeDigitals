import { useNavigate } from "react-router-dom";

const SelectTemplate = () => {
  const navigate = useNavigate();

  const templates = [
    { id: "modern", name: "Modern Real Estate", thumbnail: "/thumb1.jpg" },
    { id: "classic", name: "Classic Realty", thumbnail: "/thumb2.jpg" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className="p-4 border rounded shadow cursor-pointer"
          onClick={() => navigate(`/builder/${template.id}`)}
        >
          <img src={template.thumbnail} alt={template.name} />
          <h2 className="mt-2 text-xl">{template.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default SelectTemplate;
