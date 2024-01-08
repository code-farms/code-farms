import React from "react";
import "./../layoutStyle/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">CodeFarms</div>
      <div className="header-menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </header>
  );
}
