import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  return (
    <nav className="nav">
      <h1 className="logo" onClick={() => navigate("/")}>
        Wow<span>Dop</span>
      </h1>
    </nav>
  );
}

export default Navbar;
