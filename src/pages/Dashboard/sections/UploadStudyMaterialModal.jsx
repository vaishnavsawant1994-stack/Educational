import "./UploadStudyMaterialModal.css";
import { useState } from "react";

export default function UploadStudyMaterialModal({ onClose }) {
  const [form, setForm] = useState({
    title: "",
    class: "",
    subject: "",
    type: "PDF",
  });

  const upload = () => {
    if (!form.title || !form.class || !form.subject) {
      alert("Fill all fields");
      return;
    }

    const old =
      JSON.parse(localStorage.getItem("studyMaterials")) || [];

    const newItem = {
      id: Date.now(),
      title: form.title,
      class: form.class,
      subject: form.subject,
      type: form.type,
      uploaded: new Date().toLocaleDateString(),
      downloads: 0,
    };

    localStorage.setItem(
      "studyMaterials",
      JSON.stringify([newItem, ...old])
    );

    alert("Material Uploaded");

    onClose();

    window.dispatchEvent(
      new Event("materialUploaded")
    );
  };

  return (
    <div className="upload-overlay">
      <div className="upload-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="modal-header">
          <div className="header-icon">☁</div>

          <div>
            <h2>Upload Study Material</h2>

            <p>
              Upload notes, presentations,
              documents or any study material
            </p>
          </div>
        </div>

        <div className="upload-content">

          {/* LEFT */}
          <div className="upload-left">

            <label>Title *</label>

            <input
              placeholder="Enter material title"
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
            />

            <label>Description</label>

            <textarea
              placeholder="Enter description (optional)"
            />

            <label>Select Class *</label>

            <select
              onChange={(e) =>
                setForm({
                  ...form,
                  class: e.target.value,
                })
              }
            >
              <option>Select class</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>

            <label>Subject *</label>

            <select
              onChange={(e) =>
                setForm({
                  ...form,
                  subject: e.target.value,
                })
              }
            >
              <option>Select subject</option>
              <option>Physics</option>
              <option>Math</option>
              <option>Chemistry</option>
              <option>Biology</option>
            </select>

            <label>Material Type *</label>

            <div className="material-types">

              <div
                className={`type-card ${
                  form.type === "PDF"
                    ? "active-type"
                    : ""
                }`}
                onClick={() =>
                  setForm({
                    ...form,
                    type: "PDF",
                  })
                }
              >
                PDF
              </div>

              <div
                className={`type-card ${
                  form.type === "PPT"
                    ? "active-type"
                    : ""
                }`}
                onClick={() =>
                  setForm({
                    ...form,
                    type: "PPT",
                  })
                }
              >
                PPT
              </div>

              <div
                className={`type-card ${
                  form.type === "XLSX"
                    ? "active-type"
                    : ""
                }`}
                onClick={() =>
                  setForm({
                    ...form,
                    type: "XLSX",
                  })
                }
              >
                Excel
              </div>

              <div
                className={`type-card ${
                  form.type === "DOCX"
                    ? "active-type"
                    : ""
                }`}
                onClick={() =>
                  setForm({
                    ...form,
                    type: "DOCX",
                  })
                }
              >
                Text
              </div>

            </div>

            <div className="checkboxes">

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                />
                Make visible to students
              </label>

              <label>
                <input type="checkbox" />
                Allow download
              </label>

            </div>

          </div>

          {/* RIGHT */}
          <div className="upload-right">

            <div className="upload-box">

              <div className="upload-icon">
                ☁
              </div>

              <h3>
                Drag & drop your file here
              </h3>

              <span>or</span>

              <label className="browse-btn">
                Browse Files

                <input
                  type="file"
                  hidden
                />
              </label>

            </div>

            <div className="file-info">

              <h4>
                File Information
              </h4>

              <ul>
                <li>
                  Maximum file size:
                  50MB
                </li>

                <li>
                  Supported formats:
                  PDF, PPT, PPTX,
                  DOC, DOCX,
                  XLS, XLSX
                </li>

                <li>
                  You can upload
                  text notes in TXT
                  format
                </li>
              </ul>

            </div>

          </div>

        </div>

        <div className="upload-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="upload-btn"
            onClick={upload}
          >
            Upload Material
          </button>

        </div>

      </div>
    </div>
  );
}