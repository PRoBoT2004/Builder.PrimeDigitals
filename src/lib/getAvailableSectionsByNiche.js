// src/lib/getAvailableSectionsByNiche.js
import realEstateSections from "./availableSections/realEstate";

const getAvailableSectionsByNiche = (niche) => {
  switch (niche) {
    case "real-estate":
      return realEstateSections;
    default:
      return [];
  }
};

export default getAvailableSectionsByNiche;
