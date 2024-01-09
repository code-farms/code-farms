import React from "react";
import Link from "next/link";
import "./../layoutStyle/sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="welcome">
          <p>Welcome!</p>
        </div>
        <div className="sidebar-list-wrapper">
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link href="#">All</Link>
            </li>
            <li className="sidebar-list-item">
              <a href="#">Clothing</a>
            </li>
            <li className="sidebar-list-item">
              <a href="#">Shoes</a>
            </li>
            <li className="sidebar-list-item">
              <a href="#">Accessories</a>
            </li>
            <li className="sidebar-list-item">
              <a href="#">Bags</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
