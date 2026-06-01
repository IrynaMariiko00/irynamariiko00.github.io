import { MolbertIcon } from "~/assets/icons/MolbertIcon";
import { useModalStore } from "~/store/useModalsStore";
import { ASK_DETAILS } from "~/constants/modals";

const BlankCanvas = () => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const handleAsking = () => {
    openModal({
      title: ASK_DETAILS.title,
      sections: ASK_DETAILS.sections,
      confirmButton: {
        label: "Send",
        onClick: () => {
          const form = document.getElementById("modal-form") as HTMLFormElement;
          if (!form) return;

          const formData = new FormData(form);
          const question = formData.get("question");
          const contact = formData.get("contact");

          console.log("Sending data:", { question, contact });
          closeModal();
        },
      },
    });
  };
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue/20 blur-[60px] rounded-full" />

        <div className="flex flex-col items-center justify-center opacity-60 animate-pulse-slow">
          <MolbertIcon size={150} className="mb-6" />
          <h3 className="text-xl font-light text-[var(--primary-color)]">
            Your question is a blank canvas...
          </h3>
          <p className="text-gray text mt-4 max-w-[70%]">
            I haven’t addressed this specific request yet. Let’s discuss the
            details of your custom portrait personally.
          </p>
        </div>
      </div>

      <button className="blue-btn" type="button" onClick={handleAsking}>
        Get an Answer
      </button>
    </div>
  );
};

export default BlankCanvas;
