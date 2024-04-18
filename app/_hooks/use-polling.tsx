"use client";

import { useCallback, useEffect, useState } from "react";

const baseUrl = "http://localhost:3000/api";

export function usePolling<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    const response = await fetch(`${baseUrl}${endpoint}`);
    const json = await response.json();
    setData(json.data as T);
  }, [endpoint, setData]);

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, [fetchData]);

  return { data };
}
