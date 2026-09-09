import { useRef, useState } from 'react';

import { useClickOutside } from '../../../hooks/useClickOutside';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function Dropdown({
  filterRegionHandler,
  region,
}: {
  filterRegionHandler: (region: string) => void;
  region: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setOpen(false));

  const filterRegion = (value: string) => {
    if (!value) return;
    filterRegionHandler(value);
    setOpen(false);
  };

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        type="button"
        className="dropdown__button"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{region === 'all' || region === '' ? 'Filter by Region' : region}</span>
        <i className={open ? 'fa fa-angle-down up' : 'fa fa-angle-down down'} aria-hidden="true"></i>
      </button>
      {open && (
        <ul className="dropdown__menu" role="listbox">
          <li className="dropdown__menu__item" role="option" aria-selected={region === 'all' || region === ''}>
            <button
              type="button"
              className="dropdown__menu__item__link"
              onClick={() => filterRegion('all')}
            >
              All countries
            </button>
          </li>
          {REGIONS.map((option) => (
            <li
              key={option}
              className="dropdown__menu__item"
              role="option"
              aria-selected={region === option}
            >
              <button
                type="button"
                className="dropdown__menu__item__link"
                onClick={() => filterRegion(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
