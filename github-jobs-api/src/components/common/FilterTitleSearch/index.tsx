import { Dispatch, SetStateAction } from "react";
import "./filter-title-search.scss";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const FilterTitleSearch = ({ setSearch }: Props) => (
  <input
    className="title__search-input"
    type="text"
    placeholder="Filter By Title"
    onChange={(e) => setSearch(e.target.value)}
  />
);
