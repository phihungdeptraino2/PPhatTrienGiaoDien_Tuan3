import React from "react";
import "./styles.css"; // Import CSS chung

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/images/chefify.png" alt="Chefify Logo" className="logo" />
        <span className="brand-name">Chefify</span>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-btn">🔍</button>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li>What to cook</li>
        <li>Recipes</li>
        <li>Ingredients</li>
        <li>Occasions</li>
        <li>About Us</li>
      </ul>

      {/* Recipe Box & Avatar */}
      <div className="user-section">
        <button className="recipe-box">📋 Your Recipe Box</button>
        <img src="/images/avatar.png" alt="User Avatar" className="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
