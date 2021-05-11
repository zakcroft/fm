import { Dispatch, SetStateAction } from "react";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const FilterLocationSearch = ({ setSearch }: Props) => (
  <input
    type="search"
    className="modal-filter__search-input"
    placeholder="Filter by location"
    onChange={(e) => setSearch(e.target.value)}
  />
);
