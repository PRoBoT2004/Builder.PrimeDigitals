// lib/getTemplatesByNiche.js
import realEstateTemplates from "./templates/realEstate";

const getTemplatesByNiche = (niche) => {
  switch (niche) {
    case "real-estate":
      return realEstateTemplates;
    default:
      return [];
  }
};

export default getTemplatesByNiche;
