import React, { Dispatch, SetStateAction } from "react";
import { useDeviceSizes } from "../../../hooks";

import "./filter-title-search.scss";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
  setIsFilterModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const FilterTitleSearch = ({
  setSearch,
  setIsFilterModalOpen,
}: Props) => {
  const { isMobile } = useDeviceSizes();

  return (
    <>
      <input
        className="title__search-input"
        type="text"
        placeholder="Filter By Title"
        onChange={(e) => setSearch(e.target.value)}
      />
      {isMobile && (
        <>
          <button
            className="title__search-filter"
            onClick={() => setIsFilterModalOpen(true)}
          />
          <button className="title__search-btn" />
        </>
      )}
    </>
  );
};
