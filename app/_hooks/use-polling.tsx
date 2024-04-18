"use client";

import { useCallback, useEffect, useState } from "react";
import { environment } from "../_helpers/environment";

export function usePolling<T>(endpoint: string) {
  const { apiBaseUrl } = environment;
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    const response = await fetch(`${apiBaseUrl}${endpoint}`);
    const json = await response.json();
    setData(json.data as T);
  }, [apiBaseUrl, endpoint, setData]);

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, [fetchData]);

  return { data };
}
