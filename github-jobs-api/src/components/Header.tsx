import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import Job from "./Job";
import classnames from "classnames";
import { A, AT } from "../state/toggleDarkModeReducer";
import { FullTimeOnlyCheck } from "./common/FullTimeOnlyCheck";
import { FilterLocationSearch } from "./common/FilterLocationSearch";

import logo from "../assets/desktop/logo.svg";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";

import "../scss/header.scss";
import { FilterTitleSearch } from "./common/FilterTitleSearch";

interface props {
  setSearch: Dispatch<SetStateAction<string>>;
  setIsFilterModalOpen: Dispatch<SetStateAction<boolean>>;
  toggleDarkMode: Dispatch<A>;
  isDarkMode: boolean;
}

export default function Header({
  setSearch,
  setIsFilterModalOpen,
  toggleDarkMode,
  isDarkMode,
}: props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt={""} />
      <div className="header__controls">
        <img className="header__sun" src={sun} alt={""} />
        <span
          className="header__slider"
          onClick={() => toggleDarkMode({ type: AT.TOGGLE_DARK_THEME })}
        >
          <span
            className={classnames("header__slider-btn", { on: isDarkMode })}
          />
        </span>
        <img className="header__moon" src={moon} alt={""} />
      </div>
      <div className="header__searches-mobile">
        <div className="header__search">
          <FilterTitleSearch setSearch={setSearch} />
          <button
            className="header__search-filter"
            onClick={() => setIsFilterModalOpen(true)}
          />
          <button className="header__search-btn" />
        </div>
      </div>
      <div className="header__searches-tablet">
        <div className="header__search">
          <FilterTitleSearch setSearch={setSearch} />
          <FilterLocationSearch setSearch={setSearch} />
          <FullTimeOnlyCheck setSearch={setSearch} />
        </div>
      </div>
    </header>
  );
}
