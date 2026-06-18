import React, {
  useState,
} from "react";

import "../../pages/Dashboard/sections/StudyMaterial.css";
const UploadStudyMaterial = ({
  onClose,
}) => {
  const [file, setFile] =
    useState(null);

  const [title, setTitle] =
    useState("");

  const [className, setClassName] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const handleFile = (
    e
  ) => {
    setFile(
      e.target.files[0]
    );
  };

  const handleSubmit = (
    e
  ) => {
    e.preventDefault();

    console.log({
      title,
      className,
      subject,
      file,
    });

    onClose();
  };

  return (
    <div className="upload-overlay">

      <div className="upload-modal">

        <div className="upload-head">

          <h2>
            Upload Study Material
          </h2>

          <button
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="upload-form"
        >

          <input
            placeholder="Material Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
          />

          <select
            value={className}
            onChange={(e) =>
              setClassName(
                e.target.value
              )
            }
          >
            <option value="">
              Select Class
            </option>

            <option>
              Class 1
            </option>

            <option>
              Class 5
            </option>

            <option>
              Class 8
            </option>

            <option>
              Class 10
            </option>

          </select>

          <select
            value={subject}
            onChange={(e) =>
              setSubject(
                e.target.value
              )
            }
          >
            <option value="">
              Select Subject
            </option>

            <option>
              Mathematics
            </option>

            <option>
              Science
            </option>

            <option>
              English
            </option>

            <option>
              Chemistry
            </option>

          </select>

          <label className="drop-area">

            <input
              type="file"
              hidden
              onChange={
                handleFile
              }
            />

            <span>
              {file
                ? file.name
                : "Choose or Drop File"}
            </span>

          </label>

          <div className="upload-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={
                onClose
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Upload
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default UploadStudyMaterial;