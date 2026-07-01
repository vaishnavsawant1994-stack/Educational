import "./CreateClassModal.css";
import { useState } from "react";
import {
  FaTimes,
  FaCloudUploadAlt,
} from "react-icons/fa";

const CreateClassModal = ({
  open,
  onClose,
}) => {
  const [form, setForm] =
    useState({
      className: "",
      classCode: "",
      subject: "",
      grade: "",
      section: "",
      room: "",
      description: "",
      color: "#6d50ff",
      announcements: true,
      studentPosts: true,
      thumbnail: null,
    });

  if (!open) return null;

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const generateCode = () => {
    const code =
      "CLS-" +
      Math.random()
        .toString(36)
        .slice(2, 7)
        .toUpperCase();

    setForm((prev) => ({
      ...prev,
      classCode: code,
    }));
  };

  const handleImage = (e) => {
    setForm((prev) => ({
      ...prev,
      thumbnail:
        e.target.files[0],
    }));
  };

const createClass = () => {
  if (
    !form.className ||
    !form.subject ||
    !form.grade
  ) {
    alert(
      "Please fill required fields"
    );

    return;
  }

  /* Generate only if empty */
  const finalCode =
    form.classCode?.trim() ||
    (
      "CLS-" +
      Math.random()
        .toString(36)
        .slice(2, 7)
        .toUpperCase()
    );

  const oldClasses =
    JSON.parse(
      localStorage.getItem(
        "createdClasses"
      )
    ) || [];

  /* Prevent duplicate class codes */
  const exists =
    oldClasses.some(
      (cls) =>
        cls.classCode ===
        finalCode
    );

  if (exists) {
    alert(
      "Class code already exists"
    );

    return;
  }

  const newClass = {
    id: Date.now(),

    ...form,

    classCode:
      finalCode,

    createdAt:
      new Date()
        .toLocaleDateString(),
  };

  localStorage.setItem(
    "createdClasses",

    JSON.stringify([
      ...oldClasses,
      newClass,
    ])
  );

  alert(
    `Class Created Successfully\nCode: ${finalCode}`
  );

  /* reset form */

  setForm({
    className: "",
    classCode: "",
    subject: "",
    grade: "",
    section: "",
    room: "",
    description: "",
    color: "#6d50ff",
    announcements: true,
    studentPosts: true,
    thumbnail: null,
  });

  onClose();
};

  return (
    <div className="modal-overlay">

      <div className="create-modal">

        {/* HEADER */}

        <div className="modal-header">

          <h2>
            Create Class
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        {/* FORM */}

        <div className="modal-grid">

          <div className="field">

            <label>
              Class Name *
            </label>

            <input
              name="className"
              value={
                form.className
              }
              onChange={
                handleChange
              }
              placeholder="Class 10A"
            />

          </div>

          <div className="field">

            <label>
              Class Code *
            </label>

            <div
              style={{
                display:
                  "flex",
                gap: "10px",
              }}
            >

              <input
                name="classCode"
                value={
                  form.classCode
                }
                onChange={
                  handleChange
                }
                placeholder="Auto Generate"
              />

              <button
                type="button"
                className="create-class"
                onClick={
                  generateCode
                }
              >
                Generate
              </button>

            </div>

            <small>
              Students use this to join.
            </small>

          </div>

          <div className="field">

            <label>
              Subject *
            </label>

            <select
              name="subject"
              value={
                form.subject
              }
              onChange={
                handleChange
              }
            >

              <option value="">
                Select
              </option>

              <option>
                Mathematics
              </option>

              <option>
                Computer Science
              </option>

              <option>
                Physics
              </option>

              <option>
                Chemistry
              </option>

            </select>

          </div>

          <div className="field">

            <label>
              Grade *
            </label>

            <select
              name="grade"
              value={
                form.grade
              }
              onChange={
                handleChange
              }
            >

              <option value="">
                Select
              </option>

              <option>
                Grade 10
              </option>

              <option>
                Grade 11
              </option>

              <option>
                Grade 12
              </option>

            </select>

          </div>

          <div className="field">

            <label>
              Section
            </label>

            <input
              name="section"
              value={
                form.section
              }
              onChange={
                handleChange
              }
              placeholder="A"
            />

          </div>

          <div className="field">

            <label>
              Room / Batch
            </label>

            <input
              name="room"
              value={
                form.room
              }
              onChange={
                handleChange
              }
              placeholder="Optional"
            />

          </div>

        </div>

        {/* DESCRIPTION */}

        <div className="field">

          <label>
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            value={
              form.description
            }
            onChange={
              handleChange
            }
            placeholder="Enter class details"
          />

        </div>

        {/* BOTTOM */}

        <div className="bottom-grid">

          <label className="upload-box">

            <FaCloudUploadAlt />

            <p>
              Upload Thumbnail
            </p>

            <small>

              {
                form.thumbnail
                  ?.name ||
                "PNG / JPG"
              }

            </small>

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={
                handleImage
              }
            />

          </label>

          <div>

            <label>
              Class Color
            </label>

            <div className="colors">

              {[
                "#6d50ff",
                "#3b82f6",
                "#22c55e",
                "#ff8c00",
                "#ff4fa0",
              ].map(
                (c) => (
                  <span
                    key={c}
                    style={{
                      background:
                        c,
                      border:
                        form.color ===
                        c
                          ? "3px solid black"
                          : "",
                    }}
                    onClick={() =>
                      setForm(
                        {
                          ...form,
                          color:
                            c,
                        }
                      )
                    }
                  />
                )
              )}

            </div>

          </div>

        </div>

        {/* SWITCH */}

        <div className="switch-row">

          <label>

            <input
              type="checkbox"
              name="announcements"
              checked={
                form.announcements
              }
              onChange={
                handleChange
              }
            />

            Enable Announcements

          </label>

          <label>

            <input
              type="checkbox"
              name="studentPosts"
              checked={
                form.studentPosts
              }
              onChange={
                handleChange
              }
            />

            Allow Student Posts

          </label>

        </div>

        {/* FOOTER */}

        <div className="modal-actions">

          <button
            className="cancel"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="create-class"
            onClick={
              createClass
            }
          >
            Create Class
          </button>

        </div>

      </div>

    </div>
  );
};

export default CreateClassModal;