import { createPortal } from "react-dom";

// implementations
export interface ModelImplProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModelProps extends ModelImplProps {
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
