import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import Job from "./Job";

import logo from "../assets/desktop/logo.svg";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";

import * as API from "../api/api";

import "../scss/header.scss";

interface props {
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function Header({ setSearch }: props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt={""} />
      <div className="header__controls">
        <img className="header__sun" src={sun} alt={""} />
        <span className="header__slider">
          <span className="header__slider-btn" />
        </span>
        <img className="header__moon" src={moon} alt={""} />
      </div>
      <div className="header__search">
        <input
          className="header__search-input"
          type="text"
          placeholder="Filter By Title"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="header__search-filter" />
        <button className="header__search-btn" />
      </div>
    </header>
  );
}
