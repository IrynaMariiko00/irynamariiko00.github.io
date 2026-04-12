import { attachmentOptions, formData } from "~/constants/formData";

const ContactForm = () => {
  return (
    <form
      action="/send"
      method="POST"
      className="glass-card mt-[8%] xl:mt-[3%] pb-[5%] px-[5%] w-[100%] mx-auto relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-between gap-12 min-h-[200px] relative z-10">
        <fieldset className="w-full md:w-[35%] flex flex-col gap-8">
          <legend className="card-title mb-10 text text-gray uppercase tracking-widest">
            Personal Data
          </legend>

          {formData.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label
                htmlFor={item.label.htmlFor}
                className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray"
              >
                {item.label.text}
              </label>
              <input
                id={item.input.id}
                type={item.input.type}
                required={item.input.required}
                placeholder={item.input.placeholder || ""}
                className="bg-transparent [color-scheme:dark] border-b border-[var(--color-border)] py-2 px-1 outline-none focus:border-blue transition-colors text-[var(--color-primary)] placeholder:text-[var(--color-border-dark)]"
              />
            </div>
          ))}
        </fieldset>

        {/* Секція Message / Request - НОВИЙ СТИЛЬ БЕЗ НИЖНЬОЇ РИСКИ */}
        <fieldset className="w-full md:w-[55%] flex flex-col">
          <legend className="card-title mb-10 text text-gray uppercase tracking-widest">
            Your Request or Question
          </legend>

          <div className="flex flex-col gap-3 h-full">
            <label
              htmlFor="message"
              className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray"
            >
              Message
            </label>

            {/* Замість однієї риски знизу - робимо цілісний блок з тонкою рамкою */}
            <div className="flex flex-col h-full rounded-3xl border border-[var(--color-border)] focus-within:border-blue transition-colors duration-300 overflow-hidden bg-transparent">
              <textarea
                id="message"
                placeholder="Tell me about your idea..."
                className="w-full flex-1 bg-transparent min-h-[180px] text-[var(--color-primary)] p-5 outline-none resize-none placeholder:text-[var(--color-border-dark)]"
              />

              {/* Нижня частина з кнопками всередині блоку */}
              <div className="flex justify-between items-center px-5 py-4">
                <div className="flex gap-5">
                  {attachmentOptions.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className="text-gray text hover:text-blue transition-all transform hover:scale-110"
                        title={item.label}
                      >
                        <IconComponent size={16} />
                      </button>
                    );
                  })}
                </div>
                <button
                  type="submit"
                  className="blue-btn px-6 py-2.5 rounded-xl uppercase text-[11px] tracking-[0.1em] font-bold shadow-lg shadow-blue/20"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="hover-glow" />
    </form>
  );
};

export default ContactForm;
