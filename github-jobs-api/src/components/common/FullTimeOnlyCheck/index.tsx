import { Dispatch, SetStateAction } from "react";
import "./fulltime-only-check.scss";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
  useOnly?: boolean;
  useSearchBtn?: boolean;
}

export const FullTimeOnlyCheck = ({
  setSearch,
  useOnly,
  useSearchBtn,
}: Props) => {
  const id = Math.random().toString();
  return (
    <div className="ft__check-input">
      <input
        type="checkbox"
        id={id}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label htmlFor={id.toString()} className="checkbox-custom" />
      <span className="ft__text">Full Time {useOnly ? "Only" : ""}</span>
      {useSearchBtn && (
        <button className="search-btn search-btn--small">Search</button>
      )}
    </div>
  );
};
