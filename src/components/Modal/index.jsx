import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Modal = (props) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  const contentRef = React.useRef(null);

  const handleCloseModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };
  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content--close" onClick={handleCloseModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.prototype = {
  onClose: PropTypes.func,
};
export default Modal;
