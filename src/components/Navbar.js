import React from "react";
import Logo from "../assets/airbnb_logo.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={Logo} alt="AirBnb Logo" />
    </nav>
  );
}
