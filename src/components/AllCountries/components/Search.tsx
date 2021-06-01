import React from "react";

export default function Search({searchHandler }: any) {
  const onChangeSearchHandler = (e: any) => {
    searchHandler(e.target.value);
  };
  return (
    <div className="input input--search">
      <i className="input--search__icon fa fa-search"></i>
      <input
        placeholder="Search for country..."
        className="input--search__input"
        onChange={onChangeSearchHandler}
      />
    </div>
  );
}
