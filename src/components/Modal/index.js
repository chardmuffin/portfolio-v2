import React from "react";

function Modal({ onClose, currentProject }) {

  const {name, tags, description, link, photo} = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img alt={name} onclick={window.open(link, '_blank')} src={require(`../../assets/portfolio/${photo}`)}/>
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