import React, { Dispatch, SetStateAction } from "react";
import { useDeviceSizes, SetSearchContext } from "../../../hooks";
import { SearchEnum } from "../../../constants";
import "./filter-title-search.scss";

interface Props {
  setIsFilterModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const FilterTitleSearch = ({ setIsFilterModalOpen }: Props) => {
  const { isMobile } = useDeviceSizes();

  return (
    <SetSearchContext.Consumer>
      {({ setSearch }) => {
        return (
          <>
            <input
              className="title__search-input"
              type="text"
              placeholder="Filter By Title"
              onChange={(e) =>
                setSearch((prevState) => ({
                  ...prevState,
                  ...{ [SearchEnum.DESCRIPTION]: e.target.value },
                }))
              }
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
      }}
    </SetSearchContext.Consumer>
  );
};
