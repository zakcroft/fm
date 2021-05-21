import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SearchType } from "./types";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");
};

export const useDeviceSizes = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 600px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });

  return { isMobile, isTablet, isDesktop };
};

export const SetSearchContext = createContext<{
  search: SearchType;
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
}>({
  search: undefined,
  setSearch(
    value: ((prevState: SearchType) => SearchType) | SearchType
  ): void {},
});
