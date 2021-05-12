import { Dispatch, SetStateAction } from "react";

import "./filter-location.scss";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const FilterLocationSearch = ({ setSearch }: Props) => (
  <input
    type="search"
    className="location__search-input"
    placeholder="Filter by location"
    onChange={(e) => setSearch(e.target.value)}
  />
);
