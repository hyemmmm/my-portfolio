import { create } from "zustand";

type PopupStore = {
  openPopupId: string | null;
  open: (id: string) => void;
  close: () => void;
};

export const usePopupStore = create<PopupStore>((set) => ({
  openPopupId: null,
  open: (id) => set({ openPopupId: id }),
  close: () => set({ openPopupId: null }),
}));
