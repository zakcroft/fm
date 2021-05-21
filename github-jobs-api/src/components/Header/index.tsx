import React, { useEffect, useState, Dispatch, SetStateAction } from "react";

import classnames from "classnames";
import { A, AT } from "../../state/toggleDarkModeReducer";

import { FullTimeOnlyCheck } from "../common/FullTimeOnlyCheck";
import { FilterLocationSearch } from "../common/FilterLocationSearch";
import { FilterTitleSearch } from "../common/FilterTitleSearch";

import logo from "../../assets/desktop/logo.svg";
import sun from "../../assets/desktop/icon-sun.svg";
import moon from "../../assets/desktop/icon-moon.svg";

import "./header.scss";

interface props {
  setIsFilterModalOpen: Dispatch<SetStateAction<boolean>>;
  toggleDarkMode: Dispatch<A>;
  isDarkMode: boolean;
}

export default function Header({
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

      <div className="header__search-mobile">
        <FilterTitleSearch setIsFilterModalOpen={setIsFilterModalOpen} />
      </div>

      <div className="header__search-tablet">
        <FilterTitleSearch setIsFilterModalOpen={setIsFilterModalOpen} />
        <FilterLocationSearch />
        <FullTimeOnlyCheck />
      </div>
    </header>
  );
}
