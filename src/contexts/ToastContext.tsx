"use client";

import { AlertCircle, CheckCircle, X } from "lucide-react";
import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ToastStatus = "success" | "error";

type Toast = {
  id: string;
  message: string;
  status: ToastStatus;
};

interface ToastContextType {
  showToast: (message: string, status: ToastStatus) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, status: ToastStatus) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, status }]);

    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 w-full max-w-md px-4 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              layout
              className={`
                pointer-events-auto flex items-center gap-3 pl-6 px-2 rounded-2xl shadow-2xl border
                ${
                  toast.status === "success"
                    ? "bg-[var(--color-bg-toast-success)] border-[var(--color-border-toast-success)] text-[var(--color-border-toast-success)] backdrop-blur-sm"
                    : "bg-[var(--color-bg-toast-failed)] border-[var(--color-border-toast-failed)] text-[var(--color-border-toast-failed)] backdrop-blur-sm"
                }
              `}
            >
              {toast.status === "success" ? (
                <CheckCircle size={22} className="shrink-0" />
              ) : (
                <AlertCircle size={22} className="shrink-0" />
              )}

              <span className="text-sm font-semibold leading-tight">
                {toast.message}
              </span>

              <button onClick={() => removeToast(toast.id)} className="ml-auto">
                <X size={18} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
