import CloseIcon from "~/assets/icons/CloseIcon";
import { useRedirectWithDelay } from "~/hooks/useRedirectWithDelay";
import { useScrollLock } from "~/hooks/useScrollLock";
import type { BaseModalProps } from "~/types/modals";

const BaseModal = ({
  isOpen,
  onClose,
  title,
  children,
  confirmButton,
  cancelButtonLabel = "Close",
}: BaseModalProps) => {
  useScrollLock(isOpen);
  const { handleClick } = useRedirectWithDelay(onClose);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmButton?.onClick) {
      confirmButton.onClick();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-[90%] md:w-[70%] xl:w-[50%] max-w-4xl">
        <CloseIcon
          onClick={onClose}
          className="absolute right-4 top-4 md:top-0 md:-right-16 w-6 h-6 md:w-10 md:h-10 text text-gray hover:text-[var(--color-primary)] transition-opacity cursor-pointer z-30"
        />

        <dialog
          open
          className="max-h-[80vh] md:max-h-[75vh] w-full z-20 bg-[--color-gray] glass-card p-4 md:p-10 rounded-xl shadow-2xl border border-[var(--color-border-dark)]"
        >
          {title && (
            <h1 className="big-bold text-[var(--color-extra-light-blue)] mb-4 text-center uppercase tracking-widest">
              {title}
            </h1>
          )}
          <form
            id="modal-form"
            onSubmit={handleSubmit}
            className="overflow-y-auto no-scrollbar"
          >
            {children}
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-16 mt-8 max-w-sm mx-auto w-full">
            <button
              onClick={onClose}
              className="glass-btn flex items-center justify-center px-12 h-[45px] min-w-[20%] rounded-lg uppercase text-sm tracking-widest text-center"
            >
              {cancelButtonLabel}
            </button>
            {confirmButton && (
              <button
                type="submit"
                form="modal-form"
                onClick={() => {
                  if (confirmButton.to) handleClick(confirmButton.to);
                }}
                className="blue-btn flex items-center justify-center px-8 h-[45px] rounded-lg min-w-[20%] uppercase text-sm tracking-widest"
              >
                {confirmButton?.label}
              </button>
            )}
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BaseModal;
