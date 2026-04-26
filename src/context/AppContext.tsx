import React, { createContext, useContext, useState, type ReactNode } from 'react';

/**
 * STEP 1: Define the shape of the data you want to share globally.
 * In this case, we are sharing a "visitorName" and a function to update it.
 */
interface AppContextType {
  visitorName: string;
  setVisitorName: (name: string) => void;
}

/**
 * STEP 2: Create the Context.
 * We initialize it with undefined first to ensure it's used within a Provider correctly.
 */
const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * STEP 3: Create a Provider Component.
 * This component acts as a wrapper that "holds" the state and provides it to all children.
 */
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [visitorName, setVisitorName] = useState<string>('Guest');

  return (
    <AppContext.Provider value={{ visitorName, setVisitorName }}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * STEP 4: Create a Custom Hook for easy access.
 * Instead of calling useContext(AppContext) everywhere, we use this custom hook.
 * It also adds a safety check to ensure it's used within the AppProvider.
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
