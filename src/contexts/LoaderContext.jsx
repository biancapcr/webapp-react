import { createContext, useContext, useMemo, useState } from "react";

const LoaderContext = createContext({
  loading: false,
  showLoader: () => {},
  hideLoader: () => {},
});

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const value = useMemo(() => ({
    loading,
    showLoader: () => setLoading(true),
    hideLoader: () => setLoading(false),
  }), [loading]);

  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}