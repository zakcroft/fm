import { Dispatch, SetStateAction, useContext } from "react";

import "./filter-location.scss";
import { SearchEnum } from "../../../constants";
import { SetSearchContext } from "../../../hooks";

export const FilterLocationSearch = () => {
  const { setSearch } = useContext(SetSearchContext);
  return (
    <input
      type="search"
      className="location__search-input"
      placeholder="Filter by location"
      onChange={(e) =>
        setSearch((prevState) => ({
          ...prevState,
          ...{ [SearchEnum.LOCATION]: e.target.value },
        }))
      }
    />
  );
};
