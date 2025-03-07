import React, { useState } from "react";
import "./styles.css";

const Filters = () => {
  const [filters, setFilters] = useState({
    type: ["Grilled", "Roasted"],
    time: [30, 50],
    rating: [3, 4, 5],
  });

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updated };
    });
  };

  return (
    <div className="filters">
      <h3 className="filters-title">☰ FILTERS</h3>

      {/* Type Section */}
      <div className="filter-section">
        <h4>Type</h4>
        <div className="options">
          {[
            "Pan-fried",
            "Grilled",
            "Sauteed",
            "Steamed",
            "Stir-fried",
            "Roasted",
            "Baked",
            "Stewed",
          ].map((type) => (
            <label key={type} className="checkbox-container">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() => handleCheckboxChange("type", type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Time Section */}
      <div className="filter-section">
        <h4>Time</h4>
        <input
          type="range"
          min="10"
          max="60"
          value={filters.time[0]}
          className="slider"
        />
        <input
          type="range"
          min="10"
          max="60"
          value={filters.time[1]}
          className="slider"
        />
        <div className="time-labels">
          <span>{filters.time[0]} minutes</span>
          <span>{filters.time[1]} minutes</span>
        </div>
      </div>

      {/* Rating Section */}
      <div className="filter-section">
        <h4>Rating</h4>
        <div className="ratings">
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star} className="rating-label">
              <input
                type="checkbox"
                checked={filters.rating.includes(star)}
                onChange={() => handleCheckboxChange("rating", star)}
              />
              {"★".repeat(star)}
              {"☆".repeat(5 - star)}
            </label>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button className="apply-btn">Apply</button>
    </div>
  );
};

export default Filters;
