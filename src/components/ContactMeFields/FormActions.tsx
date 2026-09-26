import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function FormActions({
  onScrollTop,
  isOverLimit,
}: {
  onScrollTop: () => void;
  isOverLimit: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <div className="md:col-span-2 flex gap-8 xl:gap-20 justify-center mt-4">
      <button
        type="reset"
        className="w-[45%] xl:w-[20%] glass-btn py-3 justify-center uppercase rounded-2xl"
        onClick={onScrollTop}
      >
        Reset
      </button>
      <button
        type="submit"
        disabled={pending || isOverLimit}
        className="w-[45%] xl:w-[20%] px-1 py-1 xl:py-3 blue-btn rounded-2xl"
        onClick={onScrollTop}
      >
        {pending ? <Loader2 className="animate-spin" /> : "Send Request"}
      </button>
    </div>
  );
}
