import React from "react";

function Modal({ onClose, currentProject }) {

  const {name, tags, description, index} = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img alt={tags} src={require(`../../assets/small/${index}.jpg`)}/>
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>

  );
};

export default Modal;