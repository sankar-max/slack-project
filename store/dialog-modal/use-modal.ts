import { atom, useAtom } from "jotai";

const isModalOpen = atom(false);

export const useModal = () => {
  return useAtom(isModalOpen);
};
