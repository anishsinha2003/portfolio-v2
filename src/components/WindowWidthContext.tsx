"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Create the context with a default value of 0 for type inference
const WindowWidthContext = createContext<number | undefined>(undefined);

// Define the type for the provider's children prop
interface WindowWidthProviderProps {
  children: ReactNode;
}

// Provider component
export const WindowWidthProvider: React.FC<WindowWidthProviderProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
};

// Custom hook to use the context
export const useWindowWidth = (): number => {
  const context = useContext(WindowWidthContext);
  if (context === undefined) {
    throw new Error("useWindowWidth must be used within a WindowWidthProvider");
  }
  return context;
};
