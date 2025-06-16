import { createContext } from "react";

import { Toaster, toast } from "react-hot-toast";

interface ToasterProviderProps {
  children: React.ReactNode;
}

export const ToasterContext = createContext<{
  toast: typeof toast;
}>({
  toast,
});

const ToasterProvider = ({ children }: ToasterProviderProps) => {
  return (
    <ToasterContext.Provider value={{ toast }}>
      {children}
      <Toaster />
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;
