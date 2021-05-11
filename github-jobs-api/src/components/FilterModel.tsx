import { Modal, ModelImplProps } from "./common/Model";
import { FilterLocationSearch } from "./common/FilterLocationSearch";
import { FullTimeOnlyCheck } from "./common/FullTimeOnlyCheck";
import { Dispatch, SetStateAction } from "react";

interface Props extends ModelImplProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const FilterModel = (props: Props) => {
  const { setSearch } = props;
  return (
    <Modal classes="modal-filter" {...props}>
      <FilterLocationSearch setSearch={setSearch} />
      <FullTimeOnlyCheck setSearch={setSearch} />

      <button className="modal-filter__search-btn">Search</button>
    </Modal>
  );
};
