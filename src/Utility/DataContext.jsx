import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const DataContext = createContext(null);

// Context provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subdomain = window.location.hostname.split('.')[0];
    let dataModulePromise;
    switch (subdomain) {
      case 'design':
        dataModulePromise = import('../design_data.js');
        break;
      case 'blockchain':
        dataModulePromise = import('../blockchain_data.js');
        break;
      default:
        dataModulePromise = import('../data.js');
    }

    dataModulePromise.then((module) => {
      setData(module.default);
      setIsLoading(false); // Set loading to false once data is loaded

    });
  }, []);

  return <DataContext.Provider value={{ isLoading, data }}>{children}</DataContext.Provider>;
};

// Hook to use data in components
export const useData = () => {
  const contextData = useContext(DataContext);

  if (contextData === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }

  return contextData; // Returns only the part of the data requested
};
