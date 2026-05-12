import { createContext, useContext } from "react";

//types
type AppContextType = { projectName: string };

const AppContext = createContext({} as AppContextType);

export function useAppContext() {
  return useContext(AppContext);
}

type AppContextProviderType = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderType) => {
  const projectName = "JobTracking!";

  //context values
  const contextValue = { projectName };

  return (
    <>
      <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    </>
  );
};
