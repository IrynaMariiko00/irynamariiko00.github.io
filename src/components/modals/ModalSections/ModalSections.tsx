import AskForm from "~/components/AskForm/AskForm";
import ProcessStepper from "~/components/ui/ProcessStepper/ProcessStepper";
import type { Section } from "~/types/modals";

const ModalSections = ({ items }: { items: Section[] }) => (
  <div className="space-y-8">
    {items.map((item, index) => (
      <div key={index} className="flex flex-col gap-3">
        {item.label && (
          <h3 className="text-[var(--color-extra-light-blue)] font-bold text-lg uppercase opacity-90 border-b border-[var(--border-color)] pb-1 w-fit">
            {item.label}
          </h3>
        )}

        {item.type === "form" ? (
          <AskForm />
        ) : item.type === "stepper" && item.steps ? (
          <ProcessStepper steps={item.steps} />
        ) : (
          <p className="text-[var(--color-primary)] leading-relaxed whitespace-pre-line text-base font-light">
            {item.text}
          </p>
        )}
      </div>
    ))}
  </div>
);

export default ModalSections;
