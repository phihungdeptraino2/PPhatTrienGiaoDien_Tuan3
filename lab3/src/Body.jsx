import React from "react";
import Filters from "./Filters"; // Import Filters component
import "./styles.css";

const Body = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <Filters /> {/* Thêm Filters vào Sidebar */}
      </aside>

      {/* Nội dung chính */}
      <main className="main-content">
        <h2>Sorry, no results were found for "cakescascsa"</h2>
        <img src="/images/nothing.png" alt="No Results" />
        <p>We have all your Independence Day sweets covered.</p>
        <div className="tags">
          <span className="tag">Sweet Cake</span>
          <span className="tag">Black Cake</span>
          <span className="tag">Pozole Verde</span>
          <span className="tag">Healthy food</span>
        </div>
      </main>
    </div>
  );
};

export default Body;
