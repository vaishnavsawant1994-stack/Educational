import React from "react";
import "../../pages/Dashboard/sections/StudyMaterial.css";
const SearchBox = ({
  value = "",
  placeholder = "Search study materials...",
  onChange,
}) => {
  return (
    <div className="search-box">

      <div className="search-icon">
        🔍
      </div>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange?.(
            e.target.value
          )
        }
      />

      {value && (
        <button
          className="clear-search"
          onClick={() =>
            onChange?.("")
          }
        >
          ✕
        </button>
      )}

    </div>
  );
};

export default SearchBox;