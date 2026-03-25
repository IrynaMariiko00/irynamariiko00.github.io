import type { ModalData } from "~/types/modals";

export const PRICING_DETAILS: ModalData = {
  title: "Payment & Process",
  sections: [
    {
      text: "To ensure your portrait is exactly as you envisioned, I follow a transparent and collaborative process from start to finish:",
    },
    {
      type: "stepper",
      steps: [
        "Submit the form and your photo. I’ll personally contact you to review the photo quality, help you choose the best reference, and, if needed, enhance the image using various AI tools.",
        "We confirm all details and timelines in advance. Work begins immediately after a 50% prepayment. The painting process usually takes up to one week (excluding delivery time), depending on the size and level of detail. All timelines are discussed and agreed upon before the work begins.",
        "I’ll send you progress updates during the process, allowing you to refine the details, adjust the direction, and request changes along the way.",
        "Final review through photos and videos. You can request final adjustments at this stage, and once approved and the remaining balance is paid via Payoneer, I’ll ship your portrait.",
      ],
    },
    {
      text: "If you have any additional questions or special requests, feel free to include them in the form — I’ll personally get in touch with you and answer everything.",
    },
  ],
};

export const ASK_DETAILS: ModalData = {
  title: "Ask your question",
  sections: [
    {
      text: "Send your question, and I’ll get back to you personally.",
    },
    {
      type: "form",
    },
  ],
};
