import { create } from 'zustand'

const useContextualEditingStore = create((set) => ({
  isOpen: false,
  elementId: null,
  sectionId: null,
  type: null, // e.g., 'text', 'background'
  position: { x: 0, y: 0 },
  props: {},
  propKey: '',

  openEditor: ({ sectionId, elementId, type, position, propKey, props }) =>
    set({
      isOpen: true,
      sectionId,
      elementId,
      type,
      position,
      propKey,
      props,
    }),

  closeEditor: () =>
    set({
      isOpen: false,
      elementId: null,
      sectionId: null,
      type: null,
      position: { x: 0, y: 0 },
      propKey: '',
      props: {},
    }),

  updateLocalProp: (key, value) =>
    set((state) => ({
      props: {
        ...state.props,
        [key]: value,
      },
    })),
}))

export default useContextualEditingStore
