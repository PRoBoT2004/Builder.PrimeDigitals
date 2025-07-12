// src/store/useBuilderStore.js

import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import getAvailableSectionsByNiche from "@/lib/getAvailableSectionsByNiche";

// Define the store
const useBuilderStore = create((set, get) => {
  const loadFromLocalStorage = () => {
    try {
      const data = localStorage.getItem("homepage_builder_layout");
      if (!data) return;

      const { sections = [], niche } = JSON.parse(data);
      const availableSections = getAvailableSectionsByNiche(niche || "real-estate");

      const hydrated = sections.map((s) => {
        const match = availableSections
          .flatMap((cat) => cat.variations)
          .find((v) => v.id === s.componentKey || v.name === s.name);

        return {
          ...s,
          component: match?.component || null,
        };
      });

      set({ sections: hydrated, niche });
    } catch (e) {
      console.error("❌ Failed to load from localStorage", e);
    }
  };

  // 👇 Call it immediately when store is created
  loadFromLocalStorage();

  return {
    // Core state
    sections: [],
    selectedSectionId: null,
    selectedProp: null,
    niche: null,

    setNiche: (nicheId) => set({ niche: nicheId }),

    addSection: (componentData) => {
      const newSection = {
        id: uuidv4(),
        name: componentData.name,
        component: componentData.component,
        props: componentData.initialProps || {},
        componentKey: componentData.componentKey || componentData.id,
      };

      set((state) => ({
        sections: [...state.sections, newSection],
        // ✅ REMOVED auto-selection - let user manually select when they want to edit
        // selectedSectionId: newSection.id,
      }));

      get().saveToLocalStorage();
    },

    removeSection: (id) => {
      const updated = get().sections.filter((s) => s.id !== id);
      const selectedId = get().selectedSectionId;

      set({
        sections: updated,
        selectedSectionId: selectedId === id ? null : selectedId,
      });

      get().saveToLocalStorage();
    },

    reorderSections: (from, to) => {
      const updated = [...get().sections];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      set({ sections: updated });
      get().saveToLocalStorage();
    },

    clearSections: () => {
      set({ sections: [], selectedSectionId: null, selectedProp: null });
      get().saveToLocalStorage();
    },

    selectSection: (id) => set({ selectedSectionId: id }),

    selectProp: (sectionId, propKey) =>
      set({ selectedSectionId: sectionId, selectedProp: propKey }),

    clearSelectedProp: () => set({ selectedProp: null }),

    updateSectionProp: (id, key, value) => {
      const updatedSections = get().sections.map((section) =>
        section.id === id
          ? {
              ...section,
              props: {
                ...section.props,
                [key]: value,
              },
            }
          : section
      );
      set({ sections: updatedSections });
      get().saveToLocalStorage();
    },

    saveToLocalStorage: () => {
      const { sections, niche } = get();
      const simplified = sections.map((s) => ({
        ...s,
        component: null,
      }));

      localStorage.setItem(
        "homepage_builder_layout",
        JSON.stringify({ sections: simplified, niche })
      );
    },

    loadFromLocalStorage,

    // Layouts handling
    saveLayout: (name) => {
      const layouts = JSON.parse(localStorage.getItem("builder_layouts") || "[]");
      const currentSections = get().sections.map((s) => ({
        name: s.name,
        componentKey: s.componentKey || s.id,
        props: s.props,
      }));

      const newLayout = {
        id: uuidv4(),
        name,
        sections: currentSections,
      };

      localStorage.setItem("builder_layouts", JSON.stringify([...layouts, newLayout]));
    },

    getSavedLayouts: () => {
      return JSON.parse(localStorage.getItem("builder_layouts") || "[]");
    },

    loadLayoutById: (layoutId) => {
      const layouts = JSON.parse(localStorage.getItem("builder_layouts") || "[]");
      const found = layouts.find((l) => l.id === layoutId);
      if (!found) return;

      const availableSections = getAvailableSectionsByNiche(get().niche || "real-estate");

      const hydrated = found.sections.map((s) => {
        const match = availableSections
          .flatMap((cat) => cat.variations)
          .find((v) => v.id === s.componentKey || v.name === s.name);

        return {
          ...s,
          id: uuidv4(),
          component: match?.component || null,
        };
      });

      set({ sections: hydrated });
      get().saveToLocalStorage();
    },

    deleteLayout: (layoutId) => {
      const layouts = JSON.parse(localStorage.getItem("builder_layouts") || "[]");
      const updated = layouts.filter((l) => l.id !== layoutId);
      localStorage.setItem("builder_layouts", JSON.stringify(updated));
    },
  };
});

export default useBuilderStore;