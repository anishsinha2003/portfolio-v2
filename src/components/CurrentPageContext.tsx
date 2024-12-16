"use client"
import { usePathname } from 'next/navigation';
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the context type
interface CurrentPageContextType {
  page: string;
  setPage: (newValue: string) => void;
}

// Create the context with an initial empty string value
const CurrentPageContext = createContext<CurrentPageContextType | undefined>(undefined);

// Create a custom hook to use the CurrentPageContext
export const useCurrentPageContext = () => {
  const context = useContext(CurrentPageContext);
  if (!context) {
    throw new Error('useCurrentPageContext must be used within a CurrentPageProvider');
  }
  return context;
};

// Create the provider component
export const CurrentPageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname
  const [page, setPage] = useState<string>(pathname || "/aboutMe");

  return (
    <CurrentPageContext.Provider value={{ page, setPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};
