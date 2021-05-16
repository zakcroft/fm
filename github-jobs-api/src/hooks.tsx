import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");
};

export const useDeviceSizes = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 600px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });

  return { isMobile, isTablet, isDesktop };
};
