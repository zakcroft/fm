import { Dispatch, SetStateAction } from "react";
import "./fulltime-only-check.scss";
import { useDeviceSizes } from "../../../hooks";
import classnames from "classnames";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
  useOnly?: boolean;
}

export const FullTimeOnlyCheck = ({ setSearch, useOnly }: Props) => {
  const { isMobile, isTablet } = useDeviceSizes();

  const id = Math.random().toString();
  return (
    <>
      <div className="ft__check-input">
        <input
          type="checkbox"
          id={id}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor={id.toString()} className="checkbox-custom" />
        <span className="ft__text">Full Time {isMobile ? "Only" : ""}</span>
      </div>
      <button
        className={classnames(
          "search-btn ft__check-search-btn",
          isTablet ? "search-btn--small" : "search-btn--large"
        )}
      >
        Search
      </button>
    </>
  );
};
