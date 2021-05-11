import { Dispatch, SetStateAction } from "react";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const FilterTitleSearch = ({ setSearch }: Props) => (
  <input
    className="header__search-input"
    type="text"
    placeholder="Filter By Title"
    onChange={(e) => setSearch(e.target.value)}
  />
);
