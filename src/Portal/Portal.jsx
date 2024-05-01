import React from "react";
import ReactDOM from "react-dom";

const modalStyles = {
  position: `fixed`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%,-50%)`,
  backgroundColor: `#FFF`,
  padding: `50px`,
  zIndex: 1000,
  height: "65vh",
  width: "50vw",
};

const overlay_style = {
  position: `fixed`,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
  zIndex: 1000,
};

export default function Portal({ open, children, onClose }) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div style={overlay_style}>
      <div className="portal_container" onClick={onClose}></div>
      <div style={modalStyles}>
        {/* <button onClick={onClose}>Close</button> */}
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
