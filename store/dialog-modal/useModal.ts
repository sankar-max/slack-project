import { atom, useAtom } from "jotai";

const isModalOpen = atom(false);

export const useModal = () => {
  const [isOpen, setIsOpen] = useAtom(isModalOpen);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
    setIsOpen,
  };
};
