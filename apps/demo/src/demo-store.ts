import { Document, Shape } from "@dgmjs/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DemoState {
  scale: number;
  origin: number[];
  theme: "light" | "dark";
  activeHandler: string | null;
  doc: Document | null;
  selection: Shape[];
  libraries: Document[];
  setScale: (scale: number) => void;
  setOrigin: (origin: [number, number]) => void;
  setTheme: (theme: "light" | "dark") => void;
  setActiveHandler: (handlerId: string | null) => void;
  setDoc: (doc: Document | null) => void;
  setSelection: (selections: Shape[]) => void;
}

export const useDemoStore = create<DemoState>()(
  devtools(
    (set) => ({
      scale: 1,
      origin: [0, 0],
      theme: "light",
      activeHandler: "Select",
      doc: null,
      selection: [],
      libraries: [],
      setScale: (scale) => set((state) => ({ scale })),
      setOrigin: (origin) => set((state) => ({ origin })),
      setTheme: (theme) => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        set((state) => ({ theme }));
      },
      setActiveHandler: (handlerId) =>
        set((state) => ({ activeHandler: handlerId })),
      setDoc: (diagram) => set((state) => ({ doc: diagram })),
      setSelection: (selections) => set((state) => ({ selection: selections })),
    }),
    { name: "DemoStore" }
  )
);
