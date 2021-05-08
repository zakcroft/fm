import { createPortal } from "react-dom";

interface ModelProps extends Props {
  classes?: string;
  children?: any;
}

export const Modal = ({ isOpen, onClose, children, classes }: ModelProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-outer" onClick={onClose}>
      <div
        className={`modal-inner ${classes}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

// implementations
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterModel = (props: Props) => {
  return (
    <Modal classes="modal-filter" {...props}>
      <input
        type="search"
        className="modal-filter__search-input"
        placeholder="Filter by location"
      />

      <div className="modal-filter__check-input">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-custom" />
        <span className="modal-filter__text">Full Time Only</span>
      </div>

      <button className="modal-filter__search-btn">Search</button>
    </Modal>
  );
};
