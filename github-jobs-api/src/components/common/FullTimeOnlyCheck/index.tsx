import { useContext, Dispatch, SetStateAction } from "react";
import "./fulltime-only-check.scss";
import { useDeviceSizes } from "../../../hooks";
import classnames from "classnames";
import { SetSearchContext } from "../../../hooks";
import { SearchEnum } from "../../../constants";
interface Props {
  useOnly?: boolean;
}

export const FullTimeOnlyCheck = ({ useOnly }: Props) => {
  const { isMobile, isTablet } = useDeviceSizes();
  const { search, setSearch } = useContext(SetSearchContext);
  const id = Math.random().toString();
  return (
    <>
      <div className="ft__check-input">
        <input
          type="checkbox"
          id={id}
          defaultChecked={search[SearchEnum.FULL_TIME]}
          checked={!!search[SearchEnum.FULL_TIME]}
          onChange={(e) => {
            console.log(e.target.checked);
            setSearch((prevState) => ({
              ...prevState,
              ...{
                [SearchEnum.FULL_TIME]: e.target.checked,
              },
            }));
          }}
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
