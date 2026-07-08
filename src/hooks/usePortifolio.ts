import { useEffect, useState } from "react";
import { loadPortfolio } from "../lib/portifolio";

export function usePortfolio() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPortfolio()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
  };
}