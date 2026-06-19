import React from "react";
import "../../pages/Dashboard/sections/StudyMaterial.css";const MaterialFilters = ({
  filters,
  onChange,
  onReset,
}) => {
  return (
    <div className="filters card">

      <div className="filter-row">

        <select
          value={filters.class}
          onChange={(e) =>
            onChange(
              "class",
              e.target.value
            )
          }
        >
          <option value="">
            Class Wise
          </option>

          <option>
            Class 1
          </option>

          <option>
            Class 2
          </option>

          <option>
            Class 3
          </option>

          <option>
            Class 4
          </option>

          <option>
            Class 5
          </option>

          <option>
            Class 6
          </option>

          <option>
            Class 7
          </option>

          <option>
            Class 8
          </option>

          <option>
            Class 9
          </option>

          <option>
            Class 10
          </option>

        </select>

        <select
          value={filters.subject}
          onChange={(e) =>
            onChange(
              "subject",
              e.target.value
            )
          }
        >
          <option value="">
            Subject Wise
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
            Physics
          </option>

          <option>
            Chemistry
          </option>

          <option>
            Biology
          </option>

        </select>

        <select
          value={
            filters.uploadType
          }
          onChange={(e) =>
            onChange(
              "uploadType",
              e.target.value
            )
          }
        >
          <option value="">
            Upload Type
          </option>

          <option>
            PDF
          </option>

          <option>
            DOC
          </option>

          <option>
            PPT
          </option>

          <option>
            VIDEO
          </option>

        </select>

      </div>

      <div className="filter-row">

        <button
          className={
            filters.recent
              ? "filter-active"
              : "filter-btn"
          }
          onClick={() =>
            onChange(
              "recent",
              !filters.recent
            )
          }
        >
          Recent Upload
        </button>

        <button
          className={
            filters.old
              ? "filter-active"
              : "filter-btn"
          }
          onClick={() =>
            onChange(
              "old",
              !filters.old
            )
          }
        >
          Old Uploads
        </button>

        <input
          type="date"
          onChange={(e) =>
            onChange(
              "date",
              e.target.value
            )
          }
        />

        <button
          className="apply-btn"
        >
          Apply Filter
        </button>

        <button
          className="reset-btn"
          onClick={onReset}
        >
          Reset
        </button>

      </div>

    </div>
  );
};

export default MaterialFilters;