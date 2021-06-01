import React, { useState } from "react";

export default function Dropdown(props: any) {
  const { filterRegionHandler } = props;
  const [open, setOpen] = useState(false);

  const filterRegion = (region: string) => {
    if (!region) return;
    filterRegionHandler(region);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="button dropdown__button" onClick={() => setOpen(!open)}>
        <span>Filter by regions</span>
        <i className={open ? 'fa fa-angle-down up' : 'fa fa-angle-down down'}></i>
      </button>
      {open ? (
        <ul className="dropdown__menu">
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Africa")}
          >
            <a className="dropdown__menu__item__link" href="#">
              Africa
            </a>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Americas")}
          >
            <a className="dropdown__menu__item__link" href="#">
              America
            </a>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Asia")}
          >
            <a className="dropdown__menu__item__link">Asia</a>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Europe")}
          >
            <a className="dropdown__menu__item__link" href="#">
              Europe
            </a>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Oceania")}
          >
            <a className="dropdown__menu__item__link" href="#">
              Oceania
            </a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
