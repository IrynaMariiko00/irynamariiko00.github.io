"use client";

import { useState } from "react";
import CalendarIcon from "~/assets/icons/CalendarIcon";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Date>();

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
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

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-[110%] left-0 z-50 p-2 glass-card bg-[var(--color-bg-calendar)]">
            <style>{`

              .rdp-button_previous .rdp-chevron,
              .rdp-button_next .rdp-chevron {
                fill: var(--color-blue-text-light);
                width: 20px;
              }
              .rdp-caption_label {
                  font-size: 1rem; 
              }

              .rdp-selected .rdp-day_button {
                border: 2px solid var(--color-blue-light);
              }
              
              .rdp-today .rdp-day_button {
                color: var(--color-blue-light);
                font-weight: bold;
              }

            `}</style>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                setSelected(date);
                setIsOpen(false);
              }}
              styles={{
                caption_label: {
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  color: "white",
                  marginBottom: "8px",
                },
                day: {
                  fontSize: "0.75rem",
                  width: "32px",
                  height: "32px",
                },
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
