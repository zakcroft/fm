import { Dispatch, SetStateAction } from "react";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const FullTimeOnlyCheck = ({ setSearch }: Props) => (
  <div className="modal-filter__check-input">
    <input
      type="checkbox"
      id="checkbox"
      onChange={(e) => setSearch(e.target.value)}
    />
    <label htmlFor="checkbox" className="checkbox-custom" />
    <span className="modal-filter__text">Full Time Only</span>
  </div>
);
