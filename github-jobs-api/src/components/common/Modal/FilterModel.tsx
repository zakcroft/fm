import { Modal, ModelImplProps } from "./index";
import { FilterLocationSearch } from "../FilterLocationSearch";
import { FullTimeOnlyCheck } from "../FullTimeOnlyCheck";

interface Props extends ModelImplProps {}

export const FilterModel = (props: Props) => {
  return (
    <Modal classes="modal-filter" {...props}>
      <FilterLocationSearch />
      <FullTimeOnlyCheck useOnly />
    </Modal>
  );
};
