import React, { useState } from "react";

export default function Dropdown(props: any) {
  const { filterRegionHandler, region } = props;
  const [open, setOpen] = useState(false);

  const filterRegion = (region: string) => {
    if (!region) return;
    filterRegionHandler(region);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="button dropdown__button" onClick={() => setOpen(!open)}>
        <span>{region === 'all' || region === '' ? 'All countries' : region}</span>
        <i className={open ? 'fa fa-angle-down up' : 'fa fa-angle-down down'}></i>
      </button>
      {open ? (
        <ul className="dropdown__menu">
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("all")}
          >
            <span className="dropdown__menu__item__link" >
              All countries
            </span>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Africa")}
          >
            <span className="dropdown__menu__item__link">
              Africa
            </span>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Americas")}
          >
            <span className="dropdown__menu__item__link">
              America
            </span>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Asia")}
          >
            <span className="dropdown__menu__item__link">Asia</span>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Europe")}
          >
            <span className="dropdown__menu__item__link">
              Europe
            </span>
          </li>
          <li
            className="dropdown__menu__item"
            onClick={() => filterRegion("Oceania")}
          >
            <span className="dropdown__menu__item__link" >
              Oceania
            </span>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
