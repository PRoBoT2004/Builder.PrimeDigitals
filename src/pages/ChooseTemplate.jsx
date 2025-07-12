import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChooseTemplate = () => {
  const navigate = useNavigate();

  const templates = [
    {
      id: "luxury",
      name: "Luxury Template",
      description: "Elegant real estate template for high-end buyers",
      image: "https://via.placeholder.com/600x300?text=Luxury+Template",
    },
  ];

  return (
    <div className="max-w-5xl p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Choose a Template</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {templates.map((template) => (
          <Card key={template.id} className="p-4 space-y-4 shadow-lg">
            <img src={template.image} alt={template.name} className="rounded-lg" />
            <h2 className="text-xl font-semibold">{template.name}</h2>
            <p className="text-gray-600">{template.description}</p>
            <Button onClick={() => navigate(`/preview/${template.id}`)}>Select</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChooseTemplate;
