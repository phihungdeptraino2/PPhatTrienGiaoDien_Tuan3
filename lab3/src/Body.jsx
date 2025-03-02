import React from "react";
import "./styles.css";

const Body = () => {
  return (
    <div className="container">
    {/* Sidebar */}
    <aside className="sidebar">
      <h3>FILTERS</h3>
      {/* Các bộ lọc */}
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
