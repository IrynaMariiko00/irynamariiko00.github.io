"use client";

import "react-day-picker/dist/style.css";
import "./DatePicker.scss";

import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import CalendarIcon from "~/assets/icons/CalendarIcon";
import type { FieldProps } from "~/types/formField";

type DatePickerProps = FieldProps & {
  subLabel?: string;
};

const DatePicker = ({ label, input, subLabel }: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Date>();

  return (
    <div className="flex flex-col gap-2 relative">
      <label
        htmlFor={label.htmlFor}
        className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray flex justify-between items-center"
      >
        {label.text}
        {subLabel && (
          <span className="text-[0.65rem] normal-case italic opacity-40">
            {subLabel}
          </span>
        )}
      </label>

      <div
        onClick={() => setIsOpen((open) => !open)}
        className="cursor-pointer bg-transparent border-b border-[var(--color-border)] py-3 px-1 flex justify-between items-center"
      >
        <span
          className={
            selected
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-border-dark)]"
          }
        >
          {selected ? format(selected, "PPP") : "Select a date..."}
        </span>
        <CalendarIcon isOpen={isOpen} />
      </div>

      <input
        className="hidden"
        id={input.id}
        value={selected ? format(selected, "yyyy-MM-dd") : ""}
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        required={input.required}
        readOnly
      />

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="date-picker-popover absolute top-[110%] left-0 z-50 p-2 glass-card bg-[var(--color-bg-calendar)]">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                setSelected(date);
                setIsOpen(false);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DatePicker;
