import React from "react";
import "../../pages/Dashboard/sections/StudyMaterial.css";
const DeleteMaterialModal = ({
  open,
  onClose,
  onDelete,
  selected = "Study Material",
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="delete-overlay">

      <div className="delete-modal">

        <div className="delete-icon">
          🗑️
        </div>

        <h2>
          Delete Material
        </h2>

        <p>
          Are you sure you want to delete
          <strong>
            {" "}
            {selected}
          </strong>
          ?
        </p>

        <span>
          This action cannot be undone.
        </span>

        <div className="delete-actions">

          <button
            className="keep-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="remove-btn"
            onClick={() => {
              onDelete?.();
              onClose?.();
            }}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteMaterialModal;