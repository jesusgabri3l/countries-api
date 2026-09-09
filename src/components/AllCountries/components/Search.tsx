import type { ChangeEvent } from 'react';

export default function Search({ searchHandler }: { searchHandler: (value: string) => void }) {
  const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchHandler(e.target.value || '');
  };
  return (
    <div className="input input--search">
      <i className="input--search__icon fa fa-search" aria-hidden="true"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        aria-label="Search for a country"
        className="input--search__input"
        onChange={onChangeSearchHandler}
      />
    </div>
  );
}
