"use client";
import { useModalStore } from "~/store/useModalsStore";
import BaseModal from "../BaseModal/BaseModal";
import ModalSections from "../ModalSections/ModalSections";

export const GlobalModal = () => {
  const { isOpen, data, closeModal } = useModalStore();

  if (!data) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={closeModal} {...data}>
      <ModalSections items={data.sections} />
    </BaseModal>
  );
};

export default GlobalModal;
