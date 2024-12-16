"use client"
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the context type
interface StringContextType {
  prevPage: string;
  setPrevPage: (newValue: string) => void;
}

// Create the context with an initial empty string value
const StringContext = createContext<StringContextType | undefined>(undefined);

// Create a custom hook to use the StringContext
export const useStringContext = () => {
  const context = useContext(StringContext);
  if (!context) {
    throw new Error('useStringContext must be used within a StringProvider');
  }
  return context;
};

// Create the provider component
export const StringProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [prevPage, setPrevPage] = useState<string>('/aboutMe');

  return (
    <StringContext.Provider value={{ prevPage, setPrevPage }}>
      {children}
    </StringContext.Provider>
  );
};
